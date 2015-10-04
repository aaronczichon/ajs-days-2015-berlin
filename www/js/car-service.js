angular.module('workshop.cars', [])
	.factory('Cars', ['$q',function ($q) {
		// Azure Mobile Service Instanz
		var client = new WindowsAzure.MobileServiceClient(
			"https://workshop.azure-mobile.net/",
			"tjdZsYmoIUmsCGqLnyiIhyxfMKTxfZ98"
			);
		var daimlerTable = client.getTable('daimler');

		var getAll = function () {
			var task = $q.defer();
			daimlerTable.read().then(function (items) {
				task.resolve(items);
			});

			return task.promise;
		}

		var addItem = function (item) {
			var task = $q.defer();
			daimlerTable.insert(item).then(function(){
				task.resolve();
			});
			
			return task.promise;
		}

		return {
			all: function () {
				return getAll();
			},
			push: function (item) {
				return addItem(item);
			}
		}
	}]);