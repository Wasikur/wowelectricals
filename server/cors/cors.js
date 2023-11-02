const cors = require("cors");

const corsOptions = {
  origin: "https://wowelectricals-frontend.vercel.app",
  methods: ["POST", "GET"],
  credentials: true,
  optionsSuccessStatus: 200, //some legacy browsers choke on 204
};

module.exports = cors(corsOptions);
