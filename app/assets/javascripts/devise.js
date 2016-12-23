var todoApp = angular.module('todoApp', ['Devise','ngRoute','ngStorage']).
  controller('mainCtrl', function(Auth,$sessionStorage,$scope,$location) {
     Auth.currentUser().then(function(user) {
        $scope.currentUser = user;
        $sessionStorage.currentUser = user;
    }, function(error) {
      
    });

    $scope.logout = function(){
       Auth.logout().then(function(user) {
          $scope.currentUser = null;
          $sessionStorage.currentUser = null;
          location.href="/users/sign_in"
      }, function(error) {
      });
  }
});
