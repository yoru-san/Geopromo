'use strict';

/**
 * @ngdoc service
 * @name geopromoApp.dateservice
 * @description
 * # dateservice
 * Service in the geopromoApp.
 */
angular.module('geopromoApp')
  .service('dateservice', function () {
    var obj = {};
    obj.toDBDate = function (date) {
      var dateBDD = date.getFullYear() +'-'+date.getMonth()+'-'+date.getDate();
      return dateBDD;
    };

    obj.toInputDate = function (date) {
      var dateString = date.split('-');
      var dateJS = new Date(dateString[0], dateString[1], dateString[2]);
      return dateJS;
    };
    return obj;
    });
