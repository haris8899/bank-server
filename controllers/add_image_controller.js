const client = require("../configs/database");

exports.addimage = async (req,res) =>{
    const {created_at,locationId,image_category,image_path} = req.body;
    try {
        var query = "Insert into location_images(created_at,location_id,image_category_id,image_path) VALUES (to_timestamp($1),$2,$3,$4);";
        const image = {created_at,locationId,image_category,image_path};
        client.query(
            query,
            [image.created_at,image.locationId, image.image_category, image.image_path],
            (err) => {
              if (err) {
                flag = 0; //If data is not inserted is not inserted to database assigning flag as 0/false.
                console.error(err);
                return res.status(500).json({
                  error: "Database error",
                });
              } else {
                flag = 1;
                res
                  .status(200)
                  .send({ message: "data added to database" });
              }
            }
          );
    } catch (err) {
        console.log(err);
    res.status(500).json({
      error: "Database error while adding image!", //Database connection error
    });
    }
}