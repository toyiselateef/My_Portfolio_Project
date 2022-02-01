import multer from "multer";
import path from "path";
let fileExt;
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // Uploads is the Upload_folder_name
//     cb(null, "public/uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "-" + Date.now() + "." + file.mimetyp);
//   },
// });

const maxSize = 1 * 1000 * 1000;

const fileFilter = function (req, file, cb) {
  // Set the filetypes, it is optional
  var filetypes = /jpeg|jpg|png/;
  var mimetype = filetypes.test(file.mimetype);

  fileExt = path.extname(file.originalname);
  var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  if (mimetype && extname) {
    return cb(null, true);
  }

  cb(
    "Error: File upload only supports the " +
      "following filetypes - " +
      filetypes
  );
};

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Uploads is the Upload_folder_name
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + fileExt);
  },
});

var upload = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: fileFilter,
});
//upload.fields=
export default upload;
