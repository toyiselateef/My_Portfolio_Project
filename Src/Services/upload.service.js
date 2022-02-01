import upload from "../Common/UploadMiddleware.js";
import folioData from "../Models/folioData.js";
import Portfolio from "../Models/portfolioModel.js";

class uploadService {
  constructor() {}
  uploadFile(req, dir) {
    var data = new folioData(req, dir).obj();
    var portfolio = new Portfolio();
    portfolio.createPortfolio(data);

    console.log("success in uploadservice");
  }
}

export default uploadService;
