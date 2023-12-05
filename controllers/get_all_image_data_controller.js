const client = require("../configs/database");

exports.getallimage = async(req,res) =>{
    try {
        var query = "Select * from location_images"
        await client.query(query,(error, results) => {
            if (error) {
              throw error
            }
            res.status(200).json(results.rows)
          });
    } catch (error) {
        console.log(err);
        res.status(500).json({
            error: "Database error while getting image data!", //Database connection error
        });
    }
}