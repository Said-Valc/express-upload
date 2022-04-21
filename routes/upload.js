const {Router} = require("express");
const path = require('path');
const router = Router();

router.post("/", (req, res) =>{
    const image = req.files.image;
    const newFileName = `${Math.random() * 100000}${path.extname(image.name)}`;


    image.mv(newFileName, (err) =>{
        if(err){
            console.log('error')
        }else{
            res.json('Файл загружен')
        }
    })
})

module.exports = router