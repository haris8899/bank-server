const express = require("express");
const client = require("../configs/database");

const router = express.Router();

const {getalllocation} = require("../controllers/get_all_location_data");

router.get("/getall",getalllocation);

module.exports = router;