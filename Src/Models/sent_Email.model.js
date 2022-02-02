import sent_EmailModel from "../DB/Schema/sentEmail.schema.js";
let saveSentEmailDetails = function (sEmailData) {
  const newModel = new sent_EmailModel(sEmailData);
  console.log("about to save sentEmail Data");
  return newModel
    .save()
    .then((doc) => {
      console.log(doc._id);
      console.log("sentEmail Data saved succefully");
    })
    .catch((err) => {
      console.error(err);
    });
};
export default saveSentEmailDetails;
