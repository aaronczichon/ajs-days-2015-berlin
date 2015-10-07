angular.module('starter.services', [])
	.factory('Cars', ['$q',function ($q) {
		// Azure Mobile Service Instanz
		var client = new WindowsAzure.MobileServiceClient(
			"https://YOUR-URL.azure-mobile.net/",
			"AZURE MOBILE PRIVATE KEY HERE"
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
			all: getAll,
			push: addItem
		}
	}]);