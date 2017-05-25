'use strict';

/**
 * @ngdoc service
 * @name geopromoApp.discountservice
 * @description
 * # discountservice
 * Service in the geopromoApp.
 */
angular.module('geopromoApp')
  .service('discountservice', function ($http, dateservice) {
  var obj = {};
  obj.ajouterDiscount = function (discount) {
    return $http.post('/rest/ajouterDiscount', {name : discount.name, description : discount.description, image : discount.image, dateDebut :  dateservice.toDBDate(discount.dateDebut), dateFin :  dateservice.toDBDate(discount.dateFin)});
  };

  return obj;

  });
