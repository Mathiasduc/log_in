var fs = require('fs');
var usersPath = __dirname + "/../private/users.json";

var bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
	authentify: function(bodyReq, res){
		fs.readFile(usersPath,'utf8', function(err, data){
			if(err){console.log(err, "\nfail readJson\n");}
			var parsedFile = JSON.parse(data);
			bcrypt.compare(bodyReq.password, parsedFile[0].password, function(err, compared) {
				if(compared){
					console.log("match");
					res.json({success: true, url:"http://192.168.1.107:8080/my_space.html"});
				}else{
					res.json({success: false});
				}
			});
		});
	}
}