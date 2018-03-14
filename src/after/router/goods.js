var db = require('../db/db');

module.exports = {
    register:function(app){
        app.get('/sifts',function(req,res){
            db.select('select * from good',function(data){
                res.send(data)
            })
        })
    }
}