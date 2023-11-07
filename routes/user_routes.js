const express = require("express");
const client = require("../configs/database");

const router = express.Router();

const { register } = require("../controllers/register_controller");

const { login } = require("../controllers/login_controller");

router.get("/", async (req, res) => {
  try {
    console.log("Entered");
    var query = "Select * from app_users";
    var qe = await client.query(query);
    res.json(qe.rows);
  } catch (error) {
    console.error(error.message);
  }
});
router.post("/register", register); //POST request to register the user

router.post("/login", login); // POST request to login the user

module.exports = router;
