todoApp.directive("projectAssignment",function(httpService,$routeParams){
	return{
		templateUrl: '/assets/projects/project_assingment_form.html',
		controller: function($scope,$location){
			// get single project
		 	httpService.getData('/api/projects/'+$routeParams.projectId)
		    .success(function (data, status, headers, config) {
		      $scope.project = data;
		    }).
		    error(function (data, status, headers, config) {

		    });

    		httpService.getData('/api/developers')
		    .success(function (data, status, headers, config) {
		      $scope.developers = data;
		    }).
		    error(function (data, status, headers, config) {

	    	});

		    // get projects developers wise
	    	httpService.getData('/api/projects/'+$routeParams.projectId+'/developers')
		    .success(function (data, status, headers, config) {
		      	$scope.projectDevelopers = data.map(function(dev) {return dev.id});
		      	console.log($scope.projectDevelopers)
		      	var a = $scope.developers;
		      	$scope.developers = []
	      		angular.forEach(a, function(developer){
				    if($scope.projectDevelopers.includes(developer.id)){
				    	developer.selected = true
				    }
				    $scope.developers.push(developer)

			  	})
		    }).
		    error(function (data, status, headers, config) {

		    });
		    // assign project to developer
	    	$scope.assignProject = function(){
	    		var selectedOption = [];
			  	angular.forEach($scope.developers, function(developer){
				    if (!!developer.selected) selectedOption.push(developer.id);
			  	})
			  	if(selectedOption.length){
					var data = {developers: selectedOption}
					httpService.postData('/api/projects/'+$routeParams.projectId+'/assign_projects',data)
				    .success(function (data, status, headers, config) {
				      selectedOption = [];
				      $location.path('#/projects')
				    }).
				    error(function (data, status, headers, config) {

				    });
				}
	    	}
		}
	}
})