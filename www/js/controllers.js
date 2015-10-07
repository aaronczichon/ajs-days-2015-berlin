angular.module('starter.controllers', [])

	.controller('DaimlerCtrl', function ($scope, $ionicActionSheet, Cars, $ionicModal) {
		$scope.cars = [];
		$scope.daimler = {
			model: undefined,
			typ: undefined,
			power: undefined
		}
		$scope.addCar = function (car) {
			Cars.push(car);
			$scope.modal.hide();
			$scope.daimler = undefined;
		}
		$scope.modal = undefined;
		$scope.show = function () {
			var hideSheet = $ionicActionSheet.show({
				buttons: [
					{ text: 'Add new car' }
				],
				titleText: 'Car Actions',
				buttonClicked: function (index) {
					if (index == 0) {
						$scope.modal.show();
						return true;
					}
						
				}
			});
		}

		$ionicModal.fromTemplateUrl('templates/modal-add-car.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function (modal) {
			$scope.modal = modal;
		});
		
		$scope.init = function() {
			Cars.all().then(function(cars){
				$scope.cars = cars;
			});
				$scope.$broadcast('scroll.refreshComplete');
		}
		
		$scope.init();
	});
