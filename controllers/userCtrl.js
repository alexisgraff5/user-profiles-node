var users = require('../models/users.js');

module.exports = {

  login: function(req, res, next) {
    //console.log(users);
    var correctUser = false;
    var loginName = req.body.name;
    var password = req.body.password;
    //console.log(loginName, password);
    for (var i = 0; i < users.length; i++) {
      if (loginName === users[i].name) {
        if (password === users[i].password) {
          correctUser = true;
          req.session.currentUser = users[i];
        }
      }
    }
    res.json({userFound: correctUser});
  }

};
