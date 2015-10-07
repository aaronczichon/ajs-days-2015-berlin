angular.module('starter.controllers', [])

	.controller('UpdateCtrl', function ($scope) {
		var deploy = new Ionic.Deploy();
		
		$scope.checkUpdate = function () {
			deploy.check().then(function (hasUpdate) {
				alert("has update");
			}, function (err) {
				alert("has no update");
			});
		}

	})

	.controller('DaimlerCtrl', function ($scope, $ionicActionSheet, Cars, $ionicModal, $ionicAnalytics) {
		var deploy = new Ionic.Deploy();
		
		$scope.checkUpdate = function () {
			deploy.check().then(function (hasUpdate) {
				alert("has update");
			}, function (err) {
				alert("has no update");
			});
		}
		
		
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

		$scope.init = function () {
			Cars.all().then(function (cars) {
				$scope.cars = cars;
			});
			$scope.$broadcast('scroll.refreshComplete');
		}

		$scope.triggerEvent = function (car) {
			var eventData = {
				car: car,
				user: Ionic.User.current()
			}
			$ionicAnalytics.track('Car clicked', eventData);
		}

		$scope.init();
	});
