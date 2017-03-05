/**
 * Created by Administrator on 2017/3/5 0005.
 */
var db = require("./db");
var settings = require("../settings");
var Season = function (name, color) {
    "use strict";
    this.name = name;
    this.color = color;
    this.bangumis = [];
};

Season.prototype.save = function (callback) {
    var season = this;
    db.open(function (err, db) {
        if (err) {
            return callback(err);
        }
        db.authenticate(settings.MONGO_DBUSER, settings.MONGO_DBPASS, function (err, result) {
            if (err) {
                db.close();
                return callback(err);
            }
            db.collection("seasons", function (err, col) {
                if (err) {
                    db.close();
                    return callback(err);
                }
                col.findOne({name: season.name}, {}, function (err, doc) {
                    if (err) {
                        db.close();
                        return callback(err);
                    } else {
                        if (doc) {
                            db.close();//要注意这个db.close()不能少 否则下一次再连接就是MongoError
                            return callback(new Error("同名的季节已经存在!"));
                        } else {
                            col.insertMany([season], function (err, resultInfo) {
                                db.close();
                                if (err) {
                                    return callback(err);
                                }
                                callback(null, resultInfo.ops[0]);
                            });
                        }
                    }
                });

            })
        });

    });

};


module.exports = Season;