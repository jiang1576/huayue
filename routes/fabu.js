var mysql=require("mysql");
var express = require('express');
var router = express.Router();
var formidable = require('formidable'),
   util = require('util');
var events = require('events');
var emitter = new events.EventEmitter();    //    创建监听器对象（你也可以直接返回值，不用这个）
var app=express();
var path=require("path");

var dirname=__dirname;    //    指向当前js的路径
app.use(express.static(path.join(__dirname, 'project')));


router.post('/', function(req, res, next) {
    const form = new formidable.IncomingForm();
    //form.encoding = 'utf-8';
    form.uploadDir = "public/upload"; //上传文件存储的路径
    form.keepExtensions = true; //保留上传文件的文件后缀
    //form.maxFileSize = 200 * 1024 * 1024;
    form.parse(req, function(err, fields, files) {
        console.log(util.inspect({fields: fields, files: files}));
        var tp=fields['Iusing'];
        var fg=fields['Istyle'];
        var color=fields['Icolor'];
        var gjname=fields['Iname'];
        var dt=fields['Idate'];
        var money=fields['Iprice'];
        var jj=fields['Ijj'];
        var gjsize=fields['Isize']
        var dbConnection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'j15767944150',
            database: 'huayue'
        });
        dbConnection.query('INSERT INTO project SET ?', {
            name: gjname,
            price: money,
            introduce: jj,
            type: tp,
            style: fg,
            colour: color,
            deadline: dt,
            size:gjsize
        }, function (err, result) {

            if (err) {
                //onsole.log(err);
                res.send("发布失败");
                dbConnection.end();
            }
            else {
                res.send('恭喜您发布成功!'); //转换成字符串发出

                dbConnection.end(); //关闭数据库连接
            }
        });
    });

});
//
// app.get("fabu",function(req,res){    //    获取发布传过来的值
//     //    创建数据库连接
//     var connection=mysql.createConnection({
//         host:"localhost",
//         user:"root",
//         password:"password",
//         database:"chahua"
//     });
//     //    连接数据库
//     connection.connect();
//     var sql="select * from users where sqlname='"+req.query.sqlname+"' and sqlpassword='"+req.query.sqlpassword+"'";    //    在数据库里面查询用户名跟密码
//     connection.query(sql,function(err,result){    //    执行sql语句，并返回结果
//         if(err){
//             res.end("登录失败");    //    数据库错误
//             console.log(err);
//         }
//         if(result.length==0){
//             res.end("用户名密码不正确");    //    数据库里面没找到配对的内容返回参数
//         }else{
//             res.end("1登陆成功啊");    //返回登录成功
//         }
//     })
//     connection.end();    //    关闭数据库
// })

module.exports = router;