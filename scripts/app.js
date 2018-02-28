
//
// Define the 'app' module.
//
angular.module('app', [])

//
// Application controller.
//
.controller('AppCtrl', function AppCtrl ($scope, $http) {

	$http.get("https://api.myjson.com/bins/1glgyd")
    .then(function(response) {
		$scope.myWelcome = response.data.leg_data;
		console.log($scope.myWelcome);
	});
	
	//
	// Setup the application data-model.
	//
	$scope.dataBindingTest = "Hello computer!";

})

;