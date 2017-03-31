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
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/connexion', {
        templateUrl: 'views/connexion.html',
        controller: 'ConnexionCtrl',
        controllerAs: 'connexion'
      })
      .when('/backoffice', {
        templateUrl: 'views/backoffice.html',
        controller: 'BackofficeCtrl',
        controllerAs: 'backoffice'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function ($mdThemingProvider) {
     $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('blue-grey')
        .warnPalette('orange');
  });
