/**
 * Created by Administrator on 2017/3/1 0001.
 */
var express = require('express');
var db = require("../models/db");
var router = express.Router();
var User = require('../models/user');
var Bangumi = require("../models/bangumi");
router.get('/',function (req,res) {
    //仅仅用来测试本地或Heroku端是否都能正常得到mongodb的url
   /* var MONGOURL = process.env.MONGOURL||"local "+require("../mongodb-info.json").url;
    res.send(["TSDM"
        ,"Download"
        ,"Area"
        ,MONGOURL
    ]);*/
    var suc = req.flash("success");
    var err = req.flash("error");
    var user = req.session.user;
    var bangumis;
    if(user){
        bangumis = Bangumi;//Bangumi.getAll()????
    }
   res.render("tsdm",{
       title:"Welcome to TSDM 下载区版头编辑系统",
       success:suc,
       error:err,
       user:req.session.user
   });

});
router.get('/ts',function (req,res) {
    res.redirect("./login");
});
router.get("/login",function (req,res) {
    var suc = req.flash("success");
    var err = req.flash("error");
    res.render("tsdm-login",{
        title:"登陆界面",
        success:suc,
        error:err
    });
});
router.post("/login",function (req,res) {
    var password = req.body['tspasswd'];
    var username = req.body['tsusername'];
    User.get(username,function (err,user) {
        if(!user){
            req.flash("error","用户不存在");
            return res.redirect('./login');
        }
        if(user.password!=password){
            req.flash("error","密码不对");
            return res.redirect("./login");
        }
        req.session.user = user;
        req.flash("success","登录成功");
        res.redirect("./");
    })
});
router.get("/logout",function (req,res) {
    req.session.user = null;
    req.flash("success","登出咯");
    res.redirect("./");
});
router.get("/season",function (req,res) {
   var Season = require("../models/season");
    new Season("201701","#FF0080").save(function (err,result) {
        res.send([err.stack,result]);
    });
});


module.exports = router;