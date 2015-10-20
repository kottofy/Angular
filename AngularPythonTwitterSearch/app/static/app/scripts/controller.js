(function () {

    var app = angular.module('searchTwitter', []);

    app.controller('FormController', function () {

        this.query = null;

        this.query = function setQuery(query) {
            this.query = query;
        }();

    });


    app.directive('searchform', function () {
        return {
            restrict: 'E', //new element
            templateUrl: 'searchform'
        };
    });



})();

