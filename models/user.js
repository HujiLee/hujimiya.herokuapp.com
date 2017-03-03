/**
 * Created by Administrator on 2017/3/2 0002.
 */
var db = require("./db");
var settings = require("../settings");
function User(name, password) {
    this.name = name;
    this.password = password;
}

User.prototype.save = function (callback) {
    var user = {
        name: this.name,
        password: this.password
    };
    db.open(function (err, db) {
        if (err) {
            return callback(err);
        }
        db.collection("users", function (err, col) {
            if (err) {
                db.close();
                return callback(err);
            }
            col.insertMany([user], function (err, resultInfo) {
                db.close();
                if (err) {
                    return callback(err);
                }
                callback(null, resultInfo.ops[0]);
            })
        })
    })
};

User.get = function (name, callback) {
    db.open(function (err, db) {
        if (err) {
            return callback(err);
        }
        db.authenticate(settings.MONGO_DBUSER,settings.MONGO_DBPASS,function (err,result) {
            if(err){
                db.close();
                return callback(err);
            }else{
                db.collection("users", function (err, collection) {
                    if (err) {
                        db.close();
                        return callback(err);
                    }
                    collection.findOne({
                        name: name
                    },{},function (err, theuser) {
                        debugger;
                        db.close();
                        if (err) {
                            return callback(err);
                        }
                        callback(null, theuser);
                    });
                });
            }
        });
    });
};
module.exports = User;