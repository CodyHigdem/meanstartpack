//
var express = require('express');

//
var app = express();

//
var port = process.env.PORT || 3000;

//ROUTER
var router = express.Router();

// */api
router.get('/', function(req, res){
	res.json({ message: 'This is a test of the api system yo'});
});

//Register all the routes with */api

app.use('/api', router);

//start the server up yo
app.listen(port);
console.log('You may view on port ' + port);