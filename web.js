var express = require('express');

var app = express.createServer(express.logger());

//var index =  new Buffer(fs.readFile('index.html'),'utf-8');

app.get('/', function(request, response) {
  response.send('Hello World 2X');
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
