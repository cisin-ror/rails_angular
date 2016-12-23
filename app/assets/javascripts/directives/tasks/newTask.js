todoApp.directive("newTask",function(httpService,$routeParams){
	return{
		templateUrl: '/assets/tasks/form.html',
		controller: function($scope){
			$scope.init = function(){
				// get projects tasks 
				httpService.getData('/api/projects/'+$routeParams.projectId+'/tasks')
			    .success(function (data, status, headers, config) {
			     	$scope.tasks = data;
			    }).
			    error(function (data, status, headers, config) {

			    });
			};
			// add new task 
		 	$scope.addTask = function(){
	 		 	httpService.postData('/api/projects/'+$routeParams.projectId+'/tasks',$scope.task)
			    .success(function (data, status, headers, config) {
			     	$scope.tasks.push(data)
			    }).
			    error(function (data, status, headers, config) {

			    });
			 }
				
		} 
	}
})