const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Revise Backend");
});

app.listen(process.env.PORT, () => {
  console.log(`App running on ${port}`);
});
