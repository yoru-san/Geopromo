'use strict';

/**
 * @ngdoc function
 * @name geopromoApp.controller:CreatediscountCtrl
 * @description
 * # CreatediscountCtrl
 * Controller of the geopromoApp
 */
angular.module('geopromoApp')
  .controller('CreatediscountCtrl', function ($scope, discountservice) {
    $scope.discount = {};
    $scope.ajouterDiscount = function () {
      discountservice.ajouterDiscount($scope.discount)
      .then(function () {
        $scope.discount = {};
      });
    };

  });
