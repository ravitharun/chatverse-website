var express = require('express');
var router = express.Router();
const cors = require("cors")
router.use(cors());
router.use(express.json());

// 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
