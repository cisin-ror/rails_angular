todoApp.directive("deloperProjects",function(httpService,$routeParams){
	return{
		templateUrl: '/assets/developers/deloperProjects.html',
		controller: function($scope){
			var userId = $scope.currentUser.role=='admin' ? $routeParams.id : $scope.currentUser.id
			$scope.developerId = userId;
    		httpService.getData('/api/developers/'+userId+'/projects')
		    .success(function (data, status, headers, config) {
		      $scope.projects = data;
		    }).
		    error(function (data, status, headers, config) {

	    	});
		}
	}
})