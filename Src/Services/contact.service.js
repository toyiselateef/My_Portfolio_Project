import { CourierClient } from "@trycourier/courier";
import pfolioData from "../Models/pfolioData.js";
import config from "../../config/env.config.js";
import saveSentEmailDetails from "../Models/sent_Email.model.js";

class ContactService {
  constructor() {
    this._courierClient = CourierClient({
      authorizationToken: config.authToken,
    });
  }
  async _sendMsg(brand, MsgType, mailData) {
    console.log(mailData);
    var Data = new pfolioData(
      brand,
      MsgType,
      mailData.email,
      mailData
    ).returnObj();

    this._courierClient.send(Data).then((msgId, rej) => {
      if (msgId) {
        saveSentEmailDetails({
          MessageId: msgId,
          clientName: mailData.name,
          desc: `${MsgType} mail`,
        });
        console.log(`mail messageId: ${msgId} sent!`);
      } else if (rej) {
        console.log("failed");
        //return false;
      }
    });
  }
}

export default ContactService;
