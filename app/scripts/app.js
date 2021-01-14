"use strict";

/**
 * @ngdoc overview
 * @name angularjsYoApp
 * @description
 * # angularjsYoApp
 *
 * Main module of the application.
 */
angular.module("angularjsYoApp", ["ngRoute"]).config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "/views/main.html",
      controller: "MainCtrl",
      controllerAs: "main",
    })
    .when("/about", {
      templateUrl: "../views/about.html",
      controller: "AboutCtrl",
      controllerAs: "about",
    })
    .otherwise({
      redirectTo: "../404.html",
    });
});
