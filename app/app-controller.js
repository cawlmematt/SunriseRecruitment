(function (app) {

    var thisController = function ($scope, $location, $cookieStore, logoutService) {

        var init = function () {
            $scope.sessionData = $cookieStore.get('sessionData');
        }

        $scope.isActive = function (route) {
            return route === $location.path();
        };

        $scope.logout = function () {
            logoutService.logout().then(function (data) {
                $scope.setSessionData(null);
                $cookieStore.remove('sessionData');
                $location.path("/home");
            });
        };
        
        $scope.setSessionData = function (sessionData) {
            $scope.sessionData = sessionData;

            if ($scope.sessionData) {
                // Convert roles into easier accessible booleans
                _.each($scope.sessionData.userRoles, function (userRole) {
                    $scope.sessionData[userRole] = true;
                });
            }
        }

        $scope.globalSettings = {};

        $scope.sessionData = null;

        init();
    };

    app.controller("app-controller", ["$scope", "$location", "$cookieStore", "logoutService", thisController]);

}(angular.module("appModule")));


