todoApp.directive("projectDetailsPage",function(httpService,$routeParams){
	return{
		templateUrl: '/assets/projects/projectDetails.html',
		controller: function($scope){
			// get developers and projects wise tasks
		 	httpService.getData('/api/developers/'+$routeParams.developerId+'/projects/'+$routeParams.id+'/tasks')
		    .success(function (data, status, headers, config) {
		      $scope.tasks = data;
		    }).
		    error(function (data, status, headers, config) {

		    });

    	 	httpService.getData('/api/developer/'+$routeParams.developerId)
		    .success(function (data, status, headers, config) {
		      	$scope.developer = data;
		    }).
		    error(function (data, status, headers, config) {

		    });

		    // change task status
	    	$scope.changeTaskStatus = function(task){
				httpService.updateData('/api/projects/'+task.project_id+'/tasks/'+task.id,{task:{status: task.status}})
			    .success(function (data, status, headers, config) {
			    }).
			    error(function (data, status, headers, config) {

			    });
			}				

		}
	}
})