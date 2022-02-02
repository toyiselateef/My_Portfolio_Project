import config from "../../config/env.config.js";

class datas {
  constructor(brand, messageType, recEmail, data) {
    var profile = config["profile"];
    let email = "";
    if (recEmail != "") {
      email = recEmail;
    } else {
      email = profile.email;
    }
    const profile2 = {
      email: email,
      name: profile.name,
      Tel: profile.Tel,
    };

    this.brand = config[`${brand}_brand`];
    this.eventId = config[`${messageType}_eventId`];
    this.recipientId = config[`${messageType}_recipientId`];
    //this.profile = config["profile"];
    // this.recEmail = recEmail;
    this.profile = profile2;

    this.data = data;
    this.override = {};
  }

  returnObj() {
    var datases = {
      brand: this.brand,
      eventId: this.eventId,
      recipientId: this.recipientId,
      profile: this.profile,
      data: this.data,
      override: this.override,
    };
    return datases;
  }
}

export default datas;
