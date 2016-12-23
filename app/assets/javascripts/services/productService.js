// todoApp.factory('httpService',function($http){
//   return {
//     getProdcuts: function (apiRoute) {
//       $http({
//           method: 'GET',
//           url: apiRoute
//         }).success(function(data) {
//             resp = data   
//        }).error(function(msg, code) {
//               resp = data   
//        });
//          return resp
//         },
//         postData: function (apiRoute, postContent) {
//             return $http({method: 'POST', url: apiRoute, data: postContent});
//         }
//     };
// })