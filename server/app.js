var express = require('express'); // brings in express
var bodyParser = require('body-parser'); // brings in body parser
var path = require('path'); // brings in path (comes with node)
var port = process.env.PORT || 3000;
var calculator = require('./modules/calculator');

var app = express();

app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html')); // returns index file
});

app.use(express.static('public')); // Returns static files like client.js


// Add req.body to the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Accept a post request
app.post('/', calculator);

// This starts our server
app.listen(port, function(){
  console.log('server running on port: ', port);
});
