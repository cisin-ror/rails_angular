todoApp.directive("showProject",function(httpService,$routeParams){
	return{
		templateUrl: '/assets/projectDetails.html',
		controller: function($scope){
			// get projects
		 	httpService.getData('/api/projects/'+$routeParams.id)
		    .success(function (data, status, headers, config) {
		      $scope.project = data;
		    }).
		    error(function (data, status, headers, config) {

		    });

		    // get developers
    		httpService.getData('/api/developers')
		    .success(function (data, status, headers, config) {
		      $scope.developers = data;
		    }).
		    error(function (data, status, headers, config) {

	    	});
		}
	}
})