angular.module('workshop.controllers', ['ionic'])

	.controller('DaimlerCtrl', function ($scope, $ionicActionSheet, $timeout, Cars, $ionicModal) {
		$scope.benz = {
			// Model welches in der View zur Anzeige verwendet wird
			model: undefined,
			typ: undefined,
			power: undefined,
			url: undefined
		};
		// Definition des modal window
		$ionicModal.fromTemplateUrl('templates/add-daimler.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function (modal) {
			$scope.addModal = modal;
		});

		$scope.show = function () {
			// Action Sheet mit nachfolgendem Template aufrufen
			$ionicActionSheet.show({
				buttons: [
					{ text: 'Hinzufügen' }
				],
				titleText: 'Daimler Optionen',
				cancelText: 'Abbrechen',
				buttonClicked: function (index) {
					if (index == 0)
						$scope.addModal.show();
					return true;
				}
			});
		};

		$scope.addCar = function (benz) {
			Cars.push(benz).then(function () {
				alert('Hinzugefügt');
				$scope.benz = undefined;
				$scope.addModal.hide();
			});
		}
	});
