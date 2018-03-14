var express = require('express');
var app = express();
var goods = require('./goods');
var bp = require('body-parser');

app.use(bp.urlencoded({extend: false}));

module.exports = {
    start: function(_port){
        app.all('*', function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
            res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
            res.header("X-Powered-By",' 3.2.1')
            if(req.method=="OPTIONS") {
              res.send(200);/*让options请求快速返回*/
            } else{
              next();
            }
        });
        goods.register(app)

        app.listen(_port)
    }
}