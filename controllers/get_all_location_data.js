const client = require("../configs/database");

exports.getalllocation = async(req,res) =>{
    try {
        var query = "Select location_id, location_description from locations"
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