(function (app) {

    var thisController = function ($scope, $location, $cookieStore, loginService, registrationService) {

        $scope.login = function (formData) {
            loginService.login(formData)
                .success(function (sessionData) {
                    if (sessionData.username) {
                        $scope.setSessionData(sessionData);
                        $cookieStore.put('sessionData', sessionData);
                        $location.path("/profile");
                    } else {
                        $scope.isInvalidLoginCredentials = true;
                    }
                })
                .error(function (error){
                    $scope.isInvalidLoginCredentials = true;
                });
        }

        $scope.register = function (formData) {
            registrationService.register(formData);
        }

    };

    app.controller("loginController", ["$scope", "$location", "$cookieStore", "loginService", "registrationService", thisController]);

}(angular.module("appModule")));


