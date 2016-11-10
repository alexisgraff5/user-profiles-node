angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      //console.log(user);
      return $http({
        method: 'POST',
        url: 'http://localhost:8000/api/login',
        data: user
      });
    };

    this.getFriends = function() {
      return $http({
        method: 'GET',
        url: 'http://localhost:8000/api/profiles'
      });
    };

});
