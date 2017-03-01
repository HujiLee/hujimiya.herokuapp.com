/**
 * Created by Administrator on 2017/3/1 0001.
 */
var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    var MONGOURL = process.env.MONGOURL||"local "+require("../mongodb-info.json").url;
    res.send(["TSDM","Download","Area",MONGOURL])
});



module.exports = router;