import "../DBConn/Database.js";
import timestamp from "../timestamp.js";
import mongoose from "mongoose";

let servicesSchema = new mongoose.Schema({
  serviceType: Number,
  servicesHtml: String,
  desc: String,
});
servicesSchema.plugin(timestamp);

servicesSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

const servicesModel = mongoose.model("services", servicesSchema, "myServices");
export default servicesModel;
