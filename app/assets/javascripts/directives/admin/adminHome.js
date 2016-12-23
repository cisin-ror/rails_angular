todoApp.directive("adminHome",function(httpService,$routeParams){
	return{
		// templateUrl: '/assets/home.html',
		controller: function($scope){
		 if($scope.currentUser && $scope.currentUser.role =='admin'){
		    httpService.getData('/api/developers_tasks')
		    .success(function (data, status, headers, config) {
		      $scope.developers = data;
  		    }).
		    error(function (data, status, headers, config) {

	    	});
		}
    	if($scope.currentUser && $scope.currentUser.role !='admin'){
			httpService.getData('/api/developers/'+$scope.currentUser.id+'/projects')
		    .success(function (data, status, headers, config) {
		     	$scope.developers = data;
		    }).
		    error(function (data, status, headers, config) {

		    });
		}
		}
	}
})