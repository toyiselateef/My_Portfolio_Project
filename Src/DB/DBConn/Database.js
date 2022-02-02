import mongoose from "mongoose";
import "dotenv/config";
import config from "../../../config/env.config.js";
const database = "portfolio";
class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    const connstr = process.env.MONGODB_CONNSTR;

    mongoose
      .connect(connstr, {
        //autoIndex: false, // Don't build indexes
        //poolSize: 3, // Maintain up to 10 socket connections
        // If not connected, return errors immediately rather than waiting for reconnect
        //bufferMaxEntries: 0,
        // all other approaches are now deprecated by MongoDB:
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error" + " " + err);
      });
  }
}

export default new Database();
//export default mongoose;
