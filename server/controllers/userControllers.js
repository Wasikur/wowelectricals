const bcrypt = require("bcryptjs");
const sgMail = require("@sendgrid/mail");

// database connection -
require("../db/conn");

// database model
// herbal project modal
const ProductModal = require("../model/productSchema");
const CategoryModal = require("../model/categorySchema");
const ContactForm = require("../model/contactFormSchema");

//herbal project data json file
const productData = require("../data/productData.json");
const CategoryData = require("../data/productCategory.json");

// from cynob for help
const User = require("../model/userSchema");
const User1 = require("../model/joinSchema");

exports.saveproductdata = async (req, res) => {
  try {
    // Empty the existing records
    await ProductModal.deleteMany();

    // Insert multiple people data into the database
    await ProductModal.insertMany(productData);

    res
      .status(201)
      .json({ message: "Product Inserted successfully", status: 201 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getproductdata = async (req, res) => {
  try {
    const status = 1;
    const productData = await ProductModal.find({ status });
    res
      .status(200)
      .json({
        message: "All products get successfully",
        status: 200,
        productData,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.savecategory = async (req, res) => {
  try {
    // Empty the existing records
    await CategoryModal.deleteMany();

    // Insert multiple people data into the database
    await CategoryModal.insertMany(CategoryData);

    res
      .status(201)
      .json({ message: "Category data Inserted successfully", status: 201 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getcategory = async (req, res) => {
  try {
    const products = await ProductModal.find({ status: 1 }, { categoryid: 1 }); // Fetch only categoryid field
    const categoryCounts = {};
    products.forEach((product) => {
      product.categoryid.forEach((categoryId) => {
        categoryCounts[categoryId] = (categoryCounts[categoryId] || 0) + 1;
      });
    });

    const status = 1;
    const categoryData = await CategoryModal.find({ status });

    res
      .status(200)
      .json({
        message: "All category get successfully",
        status: 200,
        categoryData,
        categoryCounts,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getcategoryproduct = async (req, res) => {
  const categoryurl = req.params.categoryurl;
  try {
    const foundCategory = await CategoryModal.findOne({ categoryurl });
    const categoryToFind = foundCategory.categoryid; // Extract categoryid from the found category

    const statusToFind = 1; // The status value to search for

    const productData = await ProductModal.find({
      $and: [
        { categoryid: { $in: [categoryToFind] } },
        { status: statusToFind },
      ],
    });

    res
      .status(200)
      .json({
        message: "All category Products get successfully",
        status: 200,
        productData,
      });
  } catch (error) {
    console.error(error);
  }
};

exports.getproductdetail = async (req, res) => {
  const producturl = req.params.producturl;
  try {
    const foundPoduct = await ProductModal.findOne({ producturl });

    const productToFind = foundPoduct.productid; // Extract productid from the foundProduct
    const statusToFind = 1; // The status value to search for
    const productDetail = await ProductModal.findOne({
      productid: productToFind,
      status: statusToFind,
    });

    // Extract categoryid array from the foundProduct
    const categoryArrayId = foundPoduct.categoryid;
    const categoryArrayName = await CategoryModal.find({
      categoryid: { $in: categoryArrayId },
    });

    if (productDetail) {
      res
        .status(200)
        .json({
          message: "Products detail get successfully",
          status: 200,
          productDetail,
          categoryArrayName,
        });
    } else {
      res
        .status(404)
        .json({ message: "Product detail not found", status: 404 });
    }
  } catch (error) {
    console.error(error);
  }
};

exports.getsearchdetail = async (req, res) => {
  const searchQuery = req.params.searchtext;
  const statusToFind = 1;
  try {
    const productData = await ProductModal.find({
      $and: [
        {
          $or: [
            { productname: { $regex: searchQuery, $options: "i" } },
            { description: { $regex: searchQuery, $options: "i" } },
            { productfeatures: { $regex: searchQuery, $options: "i" } },
            { productusp: { $regex: searchQuery, $options: "i" } },
            {
              keywords: {
                $in: [new RegExp(searchQuery, "i")],
              },
            },
            // { keywords: { $in: [$regex: searchQuery, $options: 'i'] } },
          ],
        },
        { status: statusToFind },
      ],
    });

    if (productData) {
      res
        .status(200)
        .json({
          message: "Search detail get successfully",
          status: 200,
          productData,
        });
    } else {
      res.status(404).json({ message: "Search detail not found", status: 404 });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.saveContactform = async (req, res) => {
  // get input value
  const { name, email, subject, message } = req.body;

  // check input field empty or not
  if (!name || !email || !subject || !message) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  // save to MongDB cloud Database
  try {
    const saveContactForm = new ContactForm({ name, email, subject, message });
    await saveContactForm.save();
    res
      .status(201)
      .json({ message: "Contact form save successfully", status: 201 });
  } catch (err) {
    console.log(err);
  }

  // send emails to clients
  // const apiKey = process.env.SENDGRID_MAIL_API_KEY;
  // const templateId = process.env.SENDGRID_MAIL_TEMPLATE_ID;
  // sgMail.setApiKey(apiKey);
  // const msg = {
  //     to: email,
  //     from: '9ak256@gmail.com',
  //     subject: 'Test Email',
  //     templateId: templateId,
  //     dynamicTemplateData: {
  //         name: name,
  //         subject: 'Test Email1111',
  //     },
  // };
  // try {
  //     await sgMail.send(msg);
  //     console.log('Email sent');
  //   } catch (error) {
  //     console.error(error);
  // }
};

exports.register = async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please filled the filed properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email allready Exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password are not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      await user.save();
      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please filled the data" });
    }

    const userLogin = await User.findOne({ email: email });

    // console.log(userLogin);
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAuthToken();
      console.log(token);

      // add token in cookie
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid credentials" });
      } else {
        res.json({ message: "user Signin Successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.logout = (req, res) => {
  console.log("Welcome in logout page");
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("user logout");
};

exports.getdata = (req, res) => {
  console.log("User Data");
  res.send(req.rootUser);
};

exports.join = async (req, res) => {
  const { email, mobile } = req.body;

  if (!email || !mobile) {
    return res.status(422).json({ error: "Email or Phone Can not be empty" });
  }

  try {
    const userExist1 = await User1.findOne({ email: email });
    const userExist2 = await User1.findOne({ mobile: mobile });
    if (userExist1) {
      return res.status(422).json({ error: "Email allready Exist" });
    } else if (userExist2) {
      return res.status(422).json({ error: "Mobile allready Exist" });
    } else {
      const user1 = new User1({ email, mobile });
      await user1.save();
      res
        .status(201)
        .json({ message: "Email registered successfully", status: 201 });
    }
  } catch (err) {
    console.log(err);
  }
};
