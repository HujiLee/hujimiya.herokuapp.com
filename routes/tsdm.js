/**
 * Created by Administrator on 2017/3/1 0001.
 */
var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    //仅仅用来测试本地或Heroku端是否都能正常得到mongodb的url
   /* var MONGOURL = process.env.MONGOURL||"local "+require("../mongodb-info.json").url;
    res.send(["TSDM"
        ,"Download"
        ,"Area"
        ,MONGOURL
    ]);*/
   res.render("tsdm",{
       title:"Welcome to TSDM 下载区版头编辑系统"
   });

});



module.exports = router;