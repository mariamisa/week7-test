const express = require("express");
const { join } = require("path");
const favicon = require('serve-favicon')
const router = require("./controllers");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(favicon(join(__dirname, '..','public', 'favicon.ico')))
app.use(express.static(join(__dirname, "..", "public")));

app.set("port", process.env.PORT || 5000);

app.use(router);

module.exports = app;
