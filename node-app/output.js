var http = require("http"),
    // url = require("url"),
    // path = require("path"),
    fs = require("fs")
    port = 8888;
 
http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("this is a test");
  response.end();
 
  
}).listen(parseInt(port, 10));
 
console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");