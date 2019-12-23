/*
* Routing config
*/
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "curd.html"
        })
        .when("/curd", {
            templateUrl : "curd.html"
        })
        .when("/product", {
            templateUrl : "product.html"
        })
});