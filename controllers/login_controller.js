const bcrypt = require("bcrypt");

const client = require("../configs/database");

const jwt = require("jsonwebtoken");

//Login Function
exports.login = async (req, res) => {
  const { userId, password } = req.body;
  try {
    const data = await client.query(
      `SELECT * FROM app_users WHERE user_id= $1;`,
      [userId]
    ); //Verifying if the user exists in the database
    const user = data.rows;
    if (user.length === 0) {
      res.status(400).json({
        error: "User is not registered, Sign Up first",
      });
    } else {
      bcrypt.compare(password, user[0].user_password, (err, result) => {
        //Comparing the hashed password
        if (err) {
            console.log(err);
          res.status(500).json({
            error: "Server error",
          });
        } else if (result === true) {
          //Checking if credentials match
          const token = jwt.sign(
            {
              userid:userId,
            },
            process.env.SECRET_KEY
          );
          console.log("signed in");
          res.status(200).json({
            message: "User signed in!",
            token: token,
          });
        } else {
          if (result != true)
            res.status(400).json({
              error: "username or password is incorrect!",
            });
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error occurred while signing in!", //Database connection error
    });
  }
};
