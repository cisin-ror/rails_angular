todoApp.directive("developer",function(httpService,$routeParams){
	return{
		templateUrl: '/assets/developers/developerDetails.html',
		controller: function($scope){
    		httpService.getData('/api/developers')
		    .success(function (data, status, headers, config) {
		      $scope.developers = data;
		    }).
		    error(function (data, status, headers, config) {

	    	});
		}
	}
})