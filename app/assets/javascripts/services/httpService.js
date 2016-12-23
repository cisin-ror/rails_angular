todoApp.factory('httpService',function($http){
  return {
    getData: function (apiRoute) {
      return $http({method: 'GET', url: apiRoute});  
    },
      postData: function (apiRoute, postContent) {
          return $http({method: 'POST', url: apiRoute, data: postContent});
      },

    updateData: function (apiRoute, postContent) {
          return $http({method: 'PUT', url: apiRoute, data: postContent});
      }

    };
})