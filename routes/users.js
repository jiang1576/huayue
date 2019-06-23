


var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var url = require('url');



router.get('/project', function(req, res, next) {
    //创建数据库连接
    var dbConnection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'j15767944150',
        database: 'huayue'
    });

    dbConnection.query('SELECT * FROM project', [], function(err, rows, fields) {
        if (err) throw err;

        //将用户表里的信息转换成JSON字符串返回给前端
        var string_res = JSON.stringify(rows);
        res.send(string_res);
        //}
        dbConnection.end();
    });
});

router.get('/content', function(req, res, next) {
    var projectId = url.parse(req.url, true).query;

        //创建数据库连接
        var dbConnection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'j15767944150',
            database: 'huayue'
        });

        dbConnection.query('SELECT * FROM project where projectId=?', [projectId.id], function (err, rows, fields) {
            if (err) throw err;
            //将用户表里的信息转换成JSON字符串返回给前端
            var string_res = JSON.stringify(rows);
            res.send( string_res);
            //}
            dbConnection.end();
        });
    // });
});

module.exports = router;
