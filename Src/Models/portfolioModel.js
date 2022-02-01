import portfolioModel from "../DB/Schema/portfolio.schema.js";
class portfolioClass {
  constructor() {
    this.result;
  }

  getAllPortfolio(perPage, value, callback) {
    let resultss;
    let result = portfolioModel
      .find()
      .select("name desc clientName value img.filename")
      // .where("value")
      // .gt(value)
      .sort({ name: "desc" })
      .limit(perPage);

    //.catch(console.log("error"));
    result.exec(callback);
    console.log(resultss);
    return resultss;
  }

  createPortfolio(portfolioData) {
    const newModel = new portfolioModel(portfolioData);
    console.log("about to save the so called file");
    return newModel
      .save()
      .then((doc) => {
        console.log(doc._id);
        console.log("saved!");
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
export default portfolioClass;
