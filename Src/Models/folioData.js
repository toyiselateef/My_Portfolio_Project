import fs from "fs";
import path from "path";
class folioData {
  constructor(req, dir) {
    this.name = req.body.name;
    this.desc = req.body.desc;
    this.clientName = req.body.clientName;
    this.value = req.body.value;
    this.size = req.file.size;
    this.link = req.body.link;

    this.data = fs.readFileSync(path.join(dir, req.file.path));
    this.contentType = req.file.mimetype;
    this.path = req.file.path;
    this.filename = req.file.filename;
  }

  obj() {
    const objectReturn = {
      name: this.name,
      desc: this.desc,
      clientName: this.clientName,
      value: this.value,
      link: this.link,

      img: {
        filename: this.filename,
        filepath: this.path,
        data: this.data,
        contentType: this.contentType,
        size: this.size,
      },
    };
    return objectReturn;
  }
}

export default folioData;
