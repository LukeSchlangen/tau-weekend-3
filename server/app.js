var express = require('express'); // brings in express
var bodyParser = require('body-parser'); // brings in body parser
var path = require('path'); // brings in path (comes with node)

var app = express();

app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html')); // returns index file
});

// This starts our server
app.listen(3000, function(){
  console.log('server running on port: ', 3000);
});
