
angular
  .module("gst_invoice")
  .controller("registerController", function ($scope, $http, $location) {
    $scope.name = "";
    $scope.email = "";
    $scope.pNumber = "";
    $scope.role = "";
    $scope.password = "";

    $scope.onSubmit = function (signupForm) {
      if (signupForm.$valid) {
        // Prepare data to send to backend
        const postData = {
          name: $scope.name,
          email: $scope.email,
          phone: $scope.pNumber,
          role: $scope.role,
          password: $scope.password,
        };
        console.log("Form Submitted", postData);

        
      }
    };
});
