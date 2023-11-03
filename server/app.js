const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors"); // Import the 'cors' package
const app = express();

// File secure using dotenv -
dotenv.config({ path: "./config.env" });

// Apply CORS middleware
app.use(cors({
  origin: "https://wowelectricals-frontend.vercel.app", // Specify the allowed origin
  methods: ["POST", "GET"],
  credentials: true,
  optionsSuccessStatus: 200,
}));

app.use(express.json());

// Database connection -
require("./db/conn");

// Router files
app.use(require("./router/auth"));

// Import PORT variable data -
const PORT = process.env.PORT;

// To check if the server is running or not
app.listen(PORT, () => {
  console.log(`Server is running at port no ${PORT}`);
});
