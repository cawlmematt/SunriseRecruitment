(function (app) {

    var logoutService = function ($http) {

        var urlBase = '/api/logout/';

        this.logout = function () {

            return $http({
                url: urlBase,
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .success(function (data) {

            });
        };
    };

    app.service("logoutService", ["$http", logoutService]);

}(angular.module("appModule")))
