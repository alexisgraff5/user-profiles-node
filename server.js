var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var config = require('./config.js');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');

var corsOptions = {
    origin: 'http://localhost:8000'
};

var app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

app.use(cors(corsOptions));

app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
}));

app.listen(config.port, function() {
  console.log('listening to port', config.port);
});
