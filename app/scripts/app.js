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
      .when('/createDiscount', {
        templateUrl: 'views/creatediscount.html',
        controller: 'CreatediscountCtrl',
        controllerAs: 'createDiscount'
      })
      .when('/userProfile', {
        templateUrl: 'views/userprofile.html',
        controller: 'UserprofileCtrl',
        controllerAs: 'userProfile'
      })
      .when('/readDiscount', {
        templateUrl: 'views/readdiscount.html',
        controller: 'ReaddiscountCtrl',
        controllerAs: 'readDiscount'
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
