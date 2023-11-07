var fs = require('fs');

exports.upload = async(req,res)=>{
    console.log("Received file" + req.file);
    res.sendStatus(200);
}