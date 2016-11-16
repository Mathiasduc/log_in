//dependencies
var express = require("express");
var bodyParser = require('body-parser');
var controllers = require('./controllers/main.controller.js');
var app = express();
var jsonParser = bodyParser.json();

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(jsonParser,function(req,rep,next){
	console.log("body req:\n",req.body);
	next();
});

//routes
app.get('/',(req,res)=>{res.sendFile(__dirname + '/index.html')});

app.post('/log', function(req, res){
	controllers.authentify(req.body, res);
});

//error handling middlewares
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('\nSomething broke!');
});

//server init
app.listen(process.env.PORT || 5000);