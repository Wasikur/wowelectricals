const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

// file secure using dotenv -
dotenv.config({ path: "./config.env" });

// CORS Policy error
app.options("*", require("./cors/cors"));
app.use(require("./cors/cors"));

app.use(express.json());

// database connection -
require("./db/conn");

// Router files
app.use(require("./router/auth"));

// import PORT variable data -
const PORT = process.env.PORT;

// to check server work or not
app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
