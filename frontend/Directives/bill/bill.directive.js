"use strict"

angular.module("gst_invoice").directive("bill", function(){
    return{
        restrict: "E",
        scope: {
            headerTitle: "@", // "Billed By"
            subtitle: "@", // "Your Details"
            companyName: "@", // "ABC Firm"
            address: "@", // "India"
            type: "@",
        },
        templateUrl: "./Directives/bill/bill.html",
        controller: function ($scope, $location){
            $scope.isOpen = false;
            $scope.companyInitial = $scope.companyName ? $scope.companyName.charAt(0).toUpperCase() : "?";

            // $scope.isDialogOpen = false;

            $scope.openDialog = function () {
                $location.path("/vinit/clients/new");
            };

            // $scope.closeDialog = function () {
            // $scope.isDialogOpen = false;
            // };

            // $scope.saveBusiness = function () {
            // console.log("Business Saved:", $scope.newBusinessName);
            // $scope.closeDialog(); // Close the dialog after saving
            // };

        },
    };
});
