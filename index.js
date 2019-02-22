require("dotenv").config();
const express = require("express");
const fs = require("fs");

const app = express();
// app.use(express.static(__dirname+"/public"))
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  let log = `${new Date().toString()} - ${req.method} - ${req.url}`;
  console.log(log);
  fs.appendFileSync("server.log", log + "\n");
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("<h1>Home Page</h1>");
});

app.get("/test", (req, res) => {
  res.status(200).send("<h1>Test Page</h1>");
});

app.listen(PORT, () => {
  console.log(`Listing on Port http://localhost:${PORT}`);
});
