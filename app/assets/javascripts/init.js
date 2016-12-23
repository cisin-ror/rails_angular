todoApp.config(function ($routeProvider) {
    $routeProvider
    .when('/' , {
        templateUrl : '/assets/welcome.html'
        
    })
    .when('/projects/new' , {
        templateUrl : 'assets/new_project.html',
        controller  : 'projectCtrl'

    }).when('/projects' , {
        templateUrl : 'assets/project_index.html',
        controller  : 'projectCtrl'
        
    }).when('/project/:id' , {
        templateUrl : 'assets/showProject.html'
       
    }).when('/projects/:projectId/tasks/new' , {
        templateUrl : 'assets/tasks/newTask.html'
       
    }).when('/projects/:projectId/assignments' , {
        templateUrl : 'assets/projects/assignments.html'
        
    }).when('/developers' , {
        templateUrl : 'assets/developers/index.html'
        
    }).when('/developer/:id/projects' , {
        templateUrl : 'assets/developers/projects.html'
       
    }).when('/project/:projectId/task/:id' , {
        templateUrl : 'assets/tasks/show.html'

    }).when('/developer/:developerId/project/:id' , {
        templateUrl : 'assets/projects/projectDetailsPage.html'

    }).when('/tasks' , {
        templateUrl : 'assets/tasks/allTasksList.html'

    }).when('users/sign_in' , {
        template : '',
    })
     .otherwise({
            redirectTo: "/",
    });
})
