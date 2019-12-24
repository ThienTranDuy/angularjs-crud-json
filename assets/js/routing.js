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
        .when("/tel", {
            templateUrl : "tel.html"
        })
        .when("/card", {
            templateUrl : "card.html"
        })
        .when("/checkout", {
            templateUrl : "checkout.html"
        })
});