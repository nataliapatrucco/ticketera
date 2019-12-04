const router = require("express").Router();
const tagsRouter = require("./tags");
const ticketRouter = require("./ticket");
const user = require("./user");
const statusRouter = require("./status");

// IMAGES
const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.resolve(__dirname, "../public/uploaded-images"));
  },
  filename: function(req, file, cb) {
    console.log("FILE", file);
    cb(null, file.fieldname + "-" + Date.now() + ".png");
  }
});

const upload = multer({ storage: storage });
// END IMAGES

router.use("/user", user);
router.use("/ticket", ticketRouter);
router.use("/tags", tagsRouter);
router.use("/status", statusRouter);

// IMAGES
// router.post("/images/test/:id", upload.any(), (req, res) => {
//   console.log("FILES", req.files);
//   res.send("image loaded");
// });
// END IMAGES

module.exports = router;
