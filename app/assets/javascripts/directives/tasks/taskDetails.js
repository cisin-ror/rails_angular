todoApp.directive("taskDetails",function(httpService,$routeParams){
	return{
		templateUrl: '/assets/tasks/taskDetails.html',
		controller: function($scope,$location){
			// get current project developers
			httpService.getData('/api/projects/'+$routeParams.projectId+'/developers')
		    .success(function (data, status, headers, config) {
		     	$scope.developers = data;
		    }).
		    error(function (data, status, headers, config) {

		    });

		    // assign task
			$scope.assignTasks = function(){
	    		var selectedTasks = [];
			  	angular.forEach($scope.developers, function(developer){
				    if (!!developer.selected) selectedTasks.push(developer.id);
			  	})
			  	if(selectedTasks.length){
					var data = {developers: selectedTasks}
					httpService.postData('/api/projects/'+$routeParams.projectId+'/tasks/'+$routeParams.id+'/assign_tasks',data)
				    .success(function (data, status, headers, config) {
				      selectedTasks = [];
				      $location.path('#/tasks')
				    }).
				    error(function (data, status, headers, config) {

				    });
				}
	    	}
				
		} 
	}
})