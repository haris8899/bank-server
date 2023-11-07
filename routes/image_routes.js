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

router.post("/upload",uploads.single("picture"), upload);

module.exports = router;