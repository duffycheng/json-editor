var filestream = require("fs");
module.exports = {
  update : function(req, res) {
    var data = "["+ Object.keys(req.body)[0]+"]";
    var dataString = JSON.stringify(data, null,"\n");

     filestream.writeFile('./output/output.json', data, function (err) {
	    if (err) return console.log(err);
	    console.log('File Done');
	  });
  }
};
