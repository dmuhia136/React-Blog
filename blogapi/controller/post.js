
const postModel = require("../model/posts")
const multer = require("multer")
const uploadMiddleware = require("../shared/fileUpload")
exports.createPost = async (req, res) => {
    try {
        var upload = uploadMiddleware.single("file");
        upload(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                res.json({ status: false, message: "Only file less than 10MB files allowed" });
            } else if (err) {
                res.json({ status: false, message: "Only file less than 10MB files allowed" });
            } else {
                try {
                    var post = new postModel({
                        title: req.body.title,
                        body: req.body.body,
                        author: req.body.author,
                        image: req.file.filename
                    })
                      if (req.file) {
                        post.file = req.file.filename;
                      }
                    res.status(200).json({ status: true, message: "Post created", body: data })
                } catch (error) {
                    res.status(500).json({ jj:"uu",status: false, message: error.message });
                }
            }
        });

    } catch (error) {
        res.json({ status: false, message: error.message });

    }
}