const path = require("path");
const multer = require("multer")

function postString() {
  const list = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789";
  var res = "";
  for (var i = 0; i < 8; i++) {
    var rnd = Math.floor(Math.random() * list.length);
    res = res + list.charAt(rnd);
  }
  return res;
}

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/");
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, postString() + "_" + ext);
  },
});

var upload = multer({
  storage: storage,

  limits: {
    fileSize: 1024 * 1024 * 150,
  },
  onError: function (err, next) {
    console.log("error", err);
    next(err);
  },
  fileFilter: function (req, file, callback) {
    var extt = path.extname(file.originalname);
    const filetypes = /pdf|jpeg|jpg|png|gif/;
    console.log(extt);
    // Check ext
    const ext = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype == true) {
      callback(null, true);
    } else {
      return callback(new Error("Only pdf files allowed"));
    }
  },
});



module.exports = upload;
