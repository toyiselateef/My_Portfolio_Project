import { CourierClient } from "@trycourier/courier";
import pfolioData from "../Models/pfolioData.js";
import config from "../../config/env.config.js";
import saveSentEmailDetails from "../Models/sent_Email.model.js";

class ContactService {
  constructor() {
    this._courierClient = CourierClient({
      authorizationToken: process.env.AUTHTOKEN,
    });
  }
  async _sendMsg(brand, MsgType, mailData) {
    //console.log(mailData);
    var emailAddress = "";
    if (MsgType == "ThankYou") {
      emailAddress = mailData.email;
    }
    var Data = new pfolioData(
      brand,
      MsgType,
      emailAddress,
      mailData
    ).returnObj();

    //console.log(Data);

    // console.log(Data.profile);
    this._courierClient.send(Data).then((msgId, rej) => {
      if (msgId) {
        //console.log(`mail messageId: ${msgId["messageId"]} sent!`);
        saveSentEmailDetails({
          messageId: msgId["messageId"],
          clientName: mailData.name,
          desc: `${MsgType} mail`,
          website: mailData.website || null,
          ClientsNo: mailData.Tel || null,
        });

        console.log(`mail sent and saved!`);
      } else if (rej) {
        console.log("failed");
        //return false;
      }
    });
  }
}

export default ContactService;
