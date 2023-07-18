const express = require("express");
const path = require("path");
const { send } = require("process");

const Server = express();
const port = 3001;

Server.get("/", (req, res) => {
  res.send("<h1>Welcomes to Men & Women Dummy Data</h1>");
});

Server.get("/men", (req, res) => {
  res.sendFile(path.resolve("./men.json"));
});
Server.get("/women", (req, res) => {
  res.sendFile(path.resolve("./women.json"));
});
Server.listen(port, () => {
  console.log(`server is running on ${port}`);
});
