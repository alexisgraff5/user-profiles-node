var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config.js');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');

var corsOptions = {
    origin: 'http://localhost:8000'
};

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use(cors(corsOptions));

app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
}));

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriends);


app.listen(config.port, function() {
  console.log('listening to port', config.port);
});
