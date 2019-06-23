var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: '首页' });
});

router.get('/project', function(req, res, next) {
    res.render('project', { title: '企划' });
});

router.get('/content', function(req, res, next) {
    res.render('content', { title: '企划详情' });
});
router.get('/fabu', function(req, res, next) {
    res.render('fabu',{title:'发布'});
});

module.exports = router;
