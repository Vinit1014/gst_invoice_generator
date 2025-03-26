"use strict";
angular.module("gst_invoice").directive("navbar", function ($document, $rootScope, $location) {
  return {
    restrict: "E",
    templateUrl: "./Directives/navbar/navbar.html",
    controller: function ($scope) {
      $scope.menuOpen = false;

      $rootScope.userName = localStorage.getItem("user_name") || null;
      if ($rootScope.userName != null) {
        $scope.userName = $rootScope.userName.charAt(0).toUpperCase(); // Initialize with rootScope data
      }

      console.log("My name is " + $scope.userName);

      // Watch for changes in $rootScope.userName
      $rootScope.$watch("userName", function (newVal) {
        // if (newVal) {
          $scope.userName = newVal.charAt(0).toUpperCase();
          console.log("Updated userName in Navbar:", $scope.userName);
        // }
      });

      $scope.logout = function() {
        localStorage.removeItem("user_id");
        localStorage.removeItem("user_name");

        $rootScope.userName = null;
        $rootScope.userData = null;
        $location.path("/login");

      }

      // Logo Image URL
      $scope.logoUrl =
        "https://media.licdn.com/dms/image/v2/D5622AQE9zq12SHD6sA/feedshare-shrink_800/B56ZUY4KjhHQAg-/0/1739879136122?e=2147483647&v=beta&t=3gNRg4sDzYd7XY2dgYOkZ2VrnKTrTmkQn1QdrxHnD10";

      // Toggle Mobile Menu
      $scope.toggleMenu = function () {
        $scope.menuOpen = !$scope.menuOpen;
      };
    },
  };
});


