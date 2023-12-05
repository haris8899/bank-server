const express = require("express");
const multer = require("multer");
const client = require("../configs/database");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
      cb(null,file.originalname)
    },
  })
const uploads = multer({ storage:storage })
const router = express.Router();

const {upload} = require("../controllers/upload_controller");
const {addimage} = require("../controllers/add_image_controller");
const {getallimage} = require("../controllers/get_all_image_data_controller");

router.post("/upload",uploads.single("picture"), upload);
router.post("/add", addimage);
router.get("/getall",getallimage)

module.exports = router;