class SentEmail {
  constructor(messageId, desc, clientName) {
    this.messageId = messageId;
    this.desc = desc;
    this.clientName = clientName;
  }
  obj() {
    var Obj = {
      messageId: this.messageId,
      desc: this.desc,
      clientName: this.clientName,
    };
    return Obj;
  }
}
export default SentEmail;
