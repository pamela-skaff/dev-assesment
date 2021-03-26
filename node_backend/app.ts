import { nextTick } from "node:process";

// 'use strict';
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
var http = require("http");
var app = express();
var port = process.env.PORT || 5000;
var server = http.createServer(app);
app.set("port", port);
server.listen(port);

var cors = require('cors');
app.options('*', cors()); // include before other routes
  app.use((req:any, res: any, next: any) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });
  
console.log(`Listening on http://localhost: ${port}`);
console.log(`host : ${process.env.HOST}`);

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
// app.use(bodyParser.json());

var booksRouter = require("./routes/books.ts");

app.use("/books", booksRouter);

// use this while runnning unit testing
// app.use("/account", accountRouter); 
module.exports = app;
