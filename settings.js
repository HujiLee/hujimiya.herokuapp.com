/**
 * Created by Administrator on 2017/3/2 0002.
 */
module.exports = {
    "MONGO_URL":process.env.MONGO_URL||require("./mongodb-info.json").MONGO_URL,
    "MONGO_PORT":process.env.PORT||require("./mongodb-info.json").MONGO_PORT,
    "COOKIE_SECRET":process.env.COOKIE_SECRET||require("./mongodb-info.json").COOKIE_SECRET,
    "MONGO_HOST":process.env.MONGO_HOST||require("./mongodb-info.json").MONGO_HOST,
    "MONGO_DBNAME":process.env.MONGO_DBNAME||require("./mongodb-info.json").MONGO_DBNAME,
    "MONGO_DBUSER":process.env.MONGO_DBUSER||require("./mongodb-info.json").MONGO_DBUSER,//db.open以后立即需要验证
    "MONGO_DBPASS":process.env.MONGO_DBPASS||require("./mongodb-info.json").MONGO_DBPASS
};