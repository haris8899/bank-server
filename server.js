const express = require("express");
const cors = require("cors");
const app = express();
require("./configs/dotenv");
const  client  =  require("./configs/database");

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

client.connect((err) => { //Connected Database

    if (err) {
    console.log(err);
    }
    else {
    console.log("Database connected!");}
    });

app.get("/", (req, res) => {
    res.status(200).send("server is running!");

})

const  user  =  require("./routes/user_routes");
const image = require("./routes/image_routes")
const location = require("./routes/location_routes");

app.use("/user",  user);
app.use("/image",image);
app.use("/location",location);

app.listen(port, () => {

console.log(`Server is running at ${port}.`);

})