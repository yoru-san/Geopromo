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
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.definePalette('chiasse', {
       '50': '#FAFAFA',
       '100': '#F5F5F5',
       '200': '#EEEEEE',
       '300': '#E0E0E0',
       '400': '#BDBDBD',
       '500': '#9E9E9E',
       '600': '#757575',
       '700': '#616161',
       '800': '#424242',
       '900': '#212121',
       'A100': '#FAFAFA',
       'A200': '#FAFAFA',
       'A400': '#FAFAFA',
       'A700': '#FAFAFA',
       'contrastDefaultColor': 'light',
       'contrastDarkColors': ['50', '100', '200', '300', 'A100'],
       'contrastLightColors': undefined
    });

     $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('green')
        .warnPalette('purple');
  });
