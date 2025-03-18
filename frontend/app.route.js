"use strict";
var app = angular.module("gst_invoice", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "./Components/Main/main.html",
      controller: "MainController",
    })
    // .when("/demo", {
    //   // templateUrl: "./Components/Demo/demo.html",
    //   templateUrl: "./Components/jobList/jobList.html",
    //   // controller: "demoController",
    //   controller: "jobListController",
    // });
});
