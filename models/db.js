/**
 * Created by Administrator on 2017/3/2 0002.
 */
var Db =require("mongodb").Db;
var Server = require("mongodb").Server;
var env = process.env;
var dbName = env['MONGO_DBNAME']||require("../mongodb-info.json").MONGO_DBNAME;
var dbHost = env['MONGO_HOST']||require("../mongodb-info.json").MONGO_HOST;
var dbPort = env['MONGO_PORT']||require("../mongodb-info.json").MONGO_PORT;
var myDb = (new Db(dbName,new Server(dbHost,dbPort),{safe:true}));
myDb.testAuth = function () {
    myDb.open(function (err,db) {
        myDb.authenticate("huji","mongo65lab",function (err,result) {
            debugger;

            db.collection("test",function (err,col) {
                col.insertMany([{auth:1}],function (err,resultInfo) {
                    db.close();
                })
            });
        })

    })


};

module.exports = myDb;