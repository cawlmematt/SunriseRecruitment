(function (app) {

    var thisController = function ($scope, $location, navTabs) {

        var init = function () {
            
        }

        $scope.isActive = function (route) {
            return route === $location.path();
        };

        $scope.globalSettings = {};

        init();
    };

    app.controller("app-controller", ["$scope", "$location", "navTabs", thisController]);

}(angular.module("appModule")));


