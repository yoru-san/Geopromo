'use strict';

/**
 * @ngdoc overview
 * @name geopromoApp
 * @description
 * # geopromoApp
 *
 * Main module of the application.
 */
angular
  .module('geopromoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
