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
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function ($mdThemingProvider) {
     $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('blue-grey')
        .warnPalette('red');
  });
