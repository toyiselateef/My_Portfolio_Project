import { CourierClient } from "@trycourier/courier";
import express from "express";
import flash from "connect-flash";
import session from "express-session";
import toastr from "express-toastr";
import cookieParser from "cookie-parser";
import config from "./config/env.config.js";
import "dotenv/config";
import fs from "fs";
import ejs from "ejs";
import configRoutes from "./Src/Routes/CvRoutes.js";
///////////////////////////////////////////////////////////
import pfolioData from "./Src/Models/pfolioData.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();
app.use(cookieParser("secret"));

app.use(
  session({
    secret: "secret",
    saveUninitialized: true,
    resave: true,
  })
);
app.use(flash());

app.use(toastr());
// Render static files
app.use("", express.static("public"));
app.use("/images", express.static("public/uploads"));
// Set the view engine to ejs
app.set("view engine", "ejs");

app.use(function (req, res, next) {
  res.locals.messages = req.session.message;
  //console.log([req.session.message,"from that"]);
  delete req.session.message;
  next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

configRoutes(app, __dirname);

app.listen(process.env.PORT, function () {
  console.log(config["port"]);
  console.log("app listening at port %s", process.env.PORT);
});
