// const cors = require("cors");

// const corsOptions = {
//   origin: ["https://wowelectricals-frontend.vercel.app"],
//   methods: ["POST", "GET"],
//   credentials: true,
//   optionsSuccessStatus: 200, //some legacy browsers choke on 204
// };

// module.exports = cors(corsOptions);

const cors = require("cors");

const corsOptions = {
  origin: "https://wowelectricals-frontend.vercel.app", // Specify the allowed origin
  methods: ["POST", "GET"],
  credentials: true,
  optionsSuccessStatus: 200,
};

const corsMiddleware = cors(corsOptions);

module.exports = (req, res, next) => {
  corsMiddleware(req, res, (error) => {
    if (error) {
      return next(error);
    }
    next();
  });
};

