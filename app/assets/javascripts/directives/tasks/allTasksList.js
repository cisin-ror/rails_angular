todoApp.directive("allTasksLists",function(httpService,$routeParams){
	return{
		templateUrl: '/assets/tasks/allTasks.html',
		controller: function($scope){
			// get all tasks
			httpService.getData('/api/all_tasks')
		    .success(function (data, status, headers, config) {
		     	$scope.tasks = data;
		    }).
		    error(function (data, status, headers, config) {

		    });
			 // add new task 
		 	$scope.addTask = function(){
	 		 	httpService.postData('/api/projects/'+$routeParams.projectId+'/tasks',$scope.task)
			    .success(function (data, status, headers, config) {
			     	$scope.tasks.push(data)
			    }).
			    error(function (data, status, headers, config) {

			    });
			 }
			
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