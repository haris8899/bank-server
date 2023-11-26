var fs = require('fs');

exports.upload = async(req,res)=>{
    console.log(req.file);
    res.sendStatus(200);
}