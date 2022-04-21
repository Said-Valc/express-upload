const {Router} = require('express');

const router = Router();

router.use('/hello', require("./hello.js"));
router.use("/upload", require("./upload"));
module.exports = router