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
    .when("/vinit/clients/new", {
      templateUrl: "./Components/newClient/newClient.html",
      controller: "newClientController",
    })
    .when("/login", {
      templateUrl: "./Components/Login/login.html",
      controller: "loginController",
    })
    .when("/register", {
      templateUrl: "./Components/Register/register.html",
      controller: "registerController",
    })
    // .when("/demo", {
    //   // templateUrl: "./Components/Demo/demo.html",
    //   templateUrl: "./Components/jobList/jobList.html",
    //   // controller: "demoController",
    //   controller: "jobListController",
    // });
});
