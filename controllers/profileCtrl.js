var profiles = require('../models/profiles.js');

module.exports = {

  getFriends: function(req, res, next) {
    var friendProfiles = [];
    var friends = req.session.currentUser.friends;
    for (var i = 0; i < friends.length; i++) {
      for (var j = 0; j < profiles.length; j++) {
        if (friends[i] === profiles[j].name) {
          friendProfiles.push(profiles[j]);
        }
      }
    }
    res.json({currentUser: req.session.currentUser, friends: friendProfiles});
  }

};
