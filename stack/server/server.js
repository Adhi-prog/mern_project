const express = require("express");
const app = express();
const dbconn = require("./config/db");

require("dotenv").config();

const port = process.env.PORT || 7777;

app.get("/", (req, res) => {
  res.json({ message: "welcome bharath" });
});

app.listen(port, () => {
  console.log(`app is listening port....${port}`);
});