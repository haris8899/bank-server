const client = require("../configs/database");

exports.getimage = async(req,res) =>{
    const { imageId } = req.body;
    try {
        var query = "Select * from location_images where image_id = $1"
        await client.query(query,[imageId],(error, results) => {
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