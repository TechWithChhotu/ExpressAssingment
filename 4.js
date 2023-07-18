// Build a Server that Generate! Random Number Using Express!
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
  res.send("search /random to get random number");
});

app.get("/random", (req, res) => {
  let random = Math.random() * (100 - 1) + 1;
  res.send({ "Random ": parseInt(random) });
});

app.listen(port, () => {
  console.log(`server is running on' localhost:${port} '`);
});
