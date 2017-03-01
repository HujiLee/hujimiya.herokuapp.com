var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
router.get("/x",function (req,res) {
    res.send({x:1});
});

module.exports = router;
