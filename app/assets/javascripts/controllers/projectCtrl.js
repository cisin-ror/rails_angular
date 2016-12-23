todoApp.controller('projectCtrl',function($scope,httpService, $location, httpService){
  $scope.projects = [];
  $scope.addProduct =function(){
    httpService.postData('/api/projects',{project: $scope.product})
    .success(function (data, status, headers, config) {
      $location.path('/projects')
    }).
    error(function (data, status, headers, config) {

    });
  }

  $scope.init = function(){
    httpService.getData('/api/projects')
    .success(function (data, status, headers, config) {
      $scope.projects = data;
    }).
    error(function (data, status, headers, config) {

    });
  }

  $scope.showProjectDetails = function(project){
    $scope.project = project;
  }

})