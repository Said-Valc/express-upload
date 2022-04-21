const express = require('express');
const indexRouter = require('./routes');
const fileUpload = require("express-fileupload")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(fileUpload())
app.use(indexRouter);

app.listen(3010, () =>{
    console.log('Server start');
})