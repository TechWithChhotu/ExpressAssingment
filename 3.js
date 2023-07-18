/*
Create a Basic Server with Different Routes using Expresl
" `/`G G → send response as {msg:`I am homepage`^
" `/about`G → send response as {msg:`I am about page`^
" `/contact ` → send response as {emai::`suppor#@pwskills.com`}
*/

const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send({ msg: "I am homePage" });
});

app.get("/about", (req, res) => {
  res.send({ msg: "I am about" });
});

app.get("/contact", (req, res) => {
  res.send({ email: "support@ckumar.com" });
});

app.listen(port, () => {
  console.log(`server is running on' localhost:${port} '`);
});
