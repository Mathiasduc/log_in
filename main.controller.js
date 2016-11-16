var fs = require('fs');
var bcrypt = require('bcrypt');

const urlAuthSuccess = "https://enigmatic-ravine-19708.herokuapp.com/my_space.html";
const usersPath = __dirname + "/users.json";


module.exports = {
	authentify: function(bodyReq, res){
		fs.readFile(usersPath,'utf8', function(err, data){
			if(err){console.log(err, "\nfail readJson\n");}
			var parsedFile = JSON.parse(data);
			bcrypt.compare(bodyReq.password, parsedFile[0].password, function(err, compared) {
				if(compared){
					console.log("match");
					res.json({successAuth: true, url:urlAuthSuccess});
				}else{
					res.status(403).json({successAuth: false});
				}
			});
		});
	}
}