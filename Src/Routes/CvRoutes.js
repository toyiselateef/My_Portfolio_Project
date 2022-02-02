import ContactService from "../Services/contact.service.js";
import PortfolioClass from "../Models/portfolioModel.js";

import upload from "../Common/UploadMiddleware.js";
import routes from "./routesUrl.js";
import fs from "fs";
import path from "path";
import services from "../Services/services.service.js";
//import folioData from "../Models/folioData.js";
import uploadService from "../Services/upload.service.js";
import BasicAuthentication from "../Services/BasicAuthentication.js";
// import BasicAuthentication2 from "../Services/BasicAuthentication2.js";
////////////////////////////////////////////////////////////////////////////

var configRoutes = function (app, dir) {
  app.get("/viewPortfolio", function (req, res) {
    res.render("./pages/viewPortfolio");
  });
  app.get("/Blog", function (req, res) {
    res.render("./pages/blog");
  });
  app.get("/HireMe", function (req, res) {
    res.render("./pages/HireMe");
  });
  //app.get(routes.home.GETRoute, function (req, res) {});

  app.get(routes.home.GETRoute, function (req, res) {
    const posts = new PortfolioClass().getAllPortfolio(
      6,
      0,
      function (err, posts) {
        res.render(routes.home.viewUrl, {
          posts: posts,
          services: services,
        });
      }
    );
  });
  app.get(routes.Portfolio.GETRoute, BasicAuthentication, function (req, res) {
    res.render(routes.Portfolio.viewUrl);
  });

  app.post(
    routes.Portfolio.POSTRoute,
    upload.single("portfolio"),
    function (req, res) {
      const service = new uploadService();
      var uploadResponse = service.uploadFile(req, dir);

      res.redirect(routes.Portfolio.GETRoute);
    }
  );

  app.post(routes.contact.POSTRoute, function (req, res) {
    if (req.body.name == "") {
      setSessionVar(req, err);
    } else {
      var data = {
        message: req.body.message,
        email: req.body.email,
        name: req.body.name,
        website: req.body.website,
        Tel: req.body.Tel,
      };
      var service1 = new ContactService();
      var service2 = new ContactService();
      Promise.all([
        service1._sendMsg("TA", "ThankYou", data),
        service2._sendMsg("TA", "Contact", data),
      ])
        .then()
        .catch(console.log);
      setSessionVar(req);
    }
    res.redirect(routes.home.GETRoute);
  });

  app.get(routes.DownloadCV.GETRoute, function (req, res) {
    res.sendFile(dir + routes.DownloadCV.viewUrl, function (err) {
      if (err) {
        console.log(err);
        res.redirect(routes.home.GETRoute);
      } else {
        console.log("sent");
      }
    });
  });
};
var setSessionVar = function (req, err) {
  if (err) {
    req.session.message = {
      intro: "error",
      type: "danger",
      message: "message not sent",
    };
  } else {
    req.session.message = {
      intro: "successful",
      type: "success",
      message: "message sent successfully",
    };
  }
};
export default configRoutes;
