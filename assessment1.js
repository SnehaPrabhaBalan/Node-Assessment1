var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('SnehaPrabha Oct 31 2021!'); //write a response to the client
  res.end(); //end the response
}).listen(2004); //the server object listens on port 8080