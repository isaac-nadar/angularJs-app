//
// Define the 'app' module.
//
var app = angular.module('app', []);

//
// Application controller.
//
app.controller('AppCtrl', function AppCtrl($scope, $http) {
	$scope.rhsData = [];
	$http.get("https://api.myjson.com/bins/1glgyd")
		.then(function (response) {
			$scope.legData = response.data.leg_data;
			console.log($scope.legData);
		});

	$scope.copyAll = function () {
		if (angular.equals($scope.rhsData, $scope.legData)) {
			alert('already copied');
		} else {
			$scope.rhsData = angular.copy($scope.legData);
		}
	};

	$scope.remove = function (item) {

		$scope.rhsData.splice($scope.rhsData.indexOf(item), 1);
		console.log($scope.rhsData);
	};

	$scope.addItem = function (item) {
		var checkDupes = false;

		if ($scope.rhsData.length !== 0) {
			$scope.rhsData.forEach(function (v) {
				if (v.rate_card_meta.global_leg_id === item.rate_card_meta.global_leg_id) {
					checkDupes = true;
				}
			});
			if (checkDupes === false) {
				$scope.rhsData.push(item);
				console.log($scope.rhsData);
			} else {
				alert('already exists');
			}
		} else {
			$scope.rhsData.push(item);
		}

	};

	$scope.addItemMargin = function (item) {

		var checkDupes = false;

		if ($scope.rhsData.length !== 0) {
			$scope.rhsData.forEach(function (v) {
				if (v.rate_card_meta.global_leg_id === item.rate_card_meta.global_leg_id) {
					checkDupes = true;
				}
			});
			if (checkDupes === false) {
				for (i = 0; i < item.rate_card_obj.card_charges.length; i++) {
					item.rate_card_obj.card_charges[i].total = item.rate_card_obj.card_charges[i].total + ((item.margin.value/100)*item.rate_card_obj.card_charges[i].total);
					console.log(item.rate_card_obj.card_charges[i].total);
				}
				$scope.rhsData.push(item);
				console.log($scope.rhsData);
			} else {
				alert('already exists');
			}
		} else {
			$scope.rhsData.push(item);
		}





		// .rate_card_obj.card_charges
	}

	//
	// Setup the application data-model.
	//
	$scope.dataBindingTest = "Hello computer!";

});