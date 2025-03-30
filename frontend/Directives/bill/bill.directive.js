"use strict"

angular.module("gst_invoice").directive("bill", function(){
    return{
        restrict: "E",
        scope: {
            headerTitle: "@", // "Billed By"
            subtitle: "@", // "Your Details"
            companyName: "@", // "ABC Firm"
            address: "@", // "India"
        },
        templateUrl: "./Directives/bill/bill.html",
        controller: function ($scope){
            $scope.isOpen = false;
            $scope.companyInitial = $scope.companyName ? $scope.companyName.charAt(0).toUpperCase() : "?";
        },
    };
});
