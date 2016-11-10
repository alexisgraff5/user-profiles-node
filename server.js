var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var corsOptions = {
    origin: 'http://localhost:8000'
};

var config = require('./config.js');

var app = express();

app.use(bodyParser.json());

app.use(cors(corsOptions));

app.use(session({
  secret: config.sessionSecret,
}));

app.listen(config.port, function() {
  console.log('listening to port', config.port);
});
