angular.module('workshop.controllers', ['ionic'])

	.controller('DaimlerCtrl', function ($scope, $ionicActionSheet, $timeout, Cars) {
		$scope.show = function () {
			$ionicActionSheet.show({
				buttons: [
					{ text: 'Hinzufügen' }
				],
				titleText: 'Daimler Optionen',
				cancelText: 'Abbrechen',
				buttonClicked: function (index) {
					return true;
				}
			});
		};
	});
