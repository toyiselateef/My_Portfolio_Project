import "../DBConn/Database.js";
("../DBConn/Database.js");
import validator from "validator";
import timestamp from "../timestamp.js";
import mongoose from "mongoose";
import fs from "fs";
import Grid from "gridfs-stream";

let portfolioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  desc: String,
  clientName: String,
  link: String,
  value: Number, //1-5
  date: Date,
  img: {
    filename: String,
    filepath: String,
    data: Buffer,
    contentType: String,
    size: Number,
  },
});
portfolioSchema.plugin(timestamp);

portfolioSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

const portfoliomodel = mongoose.model(
  "portfolio",
  portfolioSchema,
  "portfolios"
);
export default portfoliomodel;
