// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic.service.core', 'ionic.service.analytics', 'starter.controllers', 'starter.services'])

  .run(function ($ionicPlatform, $ionicAnalytics) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      Ionic.io();
      var user = Ionic.User.current();
      // if the user doesn't have an id, you'll need to give it one.
      if (!user.id) {
        user.id = Ionic.User.anonymousId();
        // user.id = 'your-custom-user-id';
      }

      user.set('name', 'Czichon');
      user.set('firstName', 'Aaron');
      user.save();

      $ionicAnalytics.register();
      if (window.cordova && window
        .cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

    // Each tab has its own nav history stack:

      .state('tab.daimler', {
        url: '/daimler',
        views: {
          'tab-daimler': {
            templateUrl: 'templates/tab-daimler.html',
            controller: 'DaimlerCtrl'
          }
        }
      })

      .state('tab.update', {
        url: '/update',
        views: {
          'tab-update': {
            templateUrl: 'templates/tab-update.html',
            controller: 'UpdateCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/daimler');

  });
