var fs = require('fs');
var usersPath = __dirname + "/users.json";

var bcrypt = require('bcrypt');

module.exports = {
	authentify: function(bodyReq, res){
		fs.readFile(usersPath,'utf8', function(err, data){
			if(err){console.log(err, "\nfail readJson\n");}
			var parsedFile = JSON.parse(data);
			bcrypt.compare(bodyReq.password, parsedFile[0].password, function(err, compared) {
				if(compared){
					console.log("match");
					res.json({success: true, url:"https://enigmatic-ravine-19708.herokuapp.com/my_space.html"});
				}else{
					res.json({success: false});
				}
			});
		});
	}
}