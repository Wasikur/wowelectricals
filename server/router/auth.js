const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const userControllers = require("../controllers/userControllers");

// for Herbal Project 
router.get("/", (req, res) => {
    res.json("Welcome in Backend");
})

//Save product data-
router.get('/saveproductdata', userControllers.saveproductdata);

//Get product data-
router.get('/getproductdata', userControllers.getproductdata);

//Save category data-
router.get('/savecategory', userControllers.savecategory);

//Get category data-
router.get('/getcategory', userControllers.getcategory);

//Get category product data-
router.get('/getcategoryproduct/:categoryurl', userControllers.getcategoryproduct);

//Get product detail data-
router.get('/getproductdetail/:producturl', userControllers.getproductdetail);

//Get Search detail data - 
router.get('/searchproduct/:searchtext', userControllers.getsearchdetail);

//Contact form save -
router.post('/saveContactform', userControllers.saveContactform);









// from cynob for help 
// Registration/Signup page - 
router.post('/register', userControllers.register);

//login page -
router.post('/signin', userControllers.signin);

//Logout page -
router.get('/logout', userControllers.logout);

//Footer join button -
router.post('/join', userControllers.join);

// Cookie parser
const cookieParser = require("cookie-parser");
router.use(cookieParser());

//Get user data for contact us and home page -
router.get('/getdata', authenticate , userControllers.getdata);


module.exports = router;