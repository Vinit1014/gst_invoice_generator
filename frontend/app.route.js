"use strict";
var app = angular.module("gst_invoice", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "./Components/Main/main.html",
      controller: "MainController",
    })
    .when("/dashboard", {
      templateUrl: "./Components/Dashboard/dashboard.html",
      controller: "DashboardController",
    })
    .when("/vinit/invoices/new", {
      templateUrl: "./Components/newInvoice/newInvoice.html",
      controller: "newInvoiceController",
    })
    .when("/vinit/invoices", {
      templateUrl: "./Components/listInvoice/listInvoice.html",
      controller: "listInvoiceController",
    })
    .when("/vinit/clients", {
      templateUrl: "./Components/listClients/listClients.html",
      controller: "listClientsController",
    })
    .when("/vinit/clients/id", {
      templateUrl: "./Components/newClient/newClient.html",
      controller: "newClientController",
    })
    // .when("/demo", {
    //   // templateUrl: "./Components/Demo/demo.html",
    //   templateUrl: "./Components/jobList/jobList.html",
    //   // controller: "demoController",
    //   controller: "jobListController",
    // });
});
