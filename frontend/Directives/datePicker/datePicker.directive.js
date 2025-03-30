"use strict";

angular.module("gst_invoice").directive("datePicker", function () {
  return {
    restrict: "E",
    scope: {
      label: "@",
      selectedDate: "=",
    },
    templateUrl: "./Directives/datePicker/datePicker.html",
    controller: function ($scope) {
      $scope.formattedDate = "";
      $scope.isDatePickerVisible = false;

      $scope.sanitizedLabel =
        "date-picker-" + ($scope.label || "").replace(/\s+/g, "-");

      // Watch for changes in selectedDate and format it
      $scope.$watch("selectedDate", function (newVal) {
        if (newVal) {
          let dateObj = new Date(newVal);
          $scope.formattedDate = dateObj.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          });
        }
      });

      // Toggle date picker visibility
      $scope.toggleDatePicker = function () {
        $scope.isDatePickerVisible = true;
        
        // Focus the input to make the date picker appear
        setTimeout(function() {
          let inputElement = document.getElementById($scope.sanitizedLabel);
          if (inputElement) {
            inputElement.focus();
          }
        }, 0);
      };
      
      // Hide date picker when input loses focus
      $scope.hideDatePicker = function() {
        $scope.isDatePickerVisible = false;
      };
    },
  };
});