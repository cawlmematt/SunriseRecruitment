(function (app) {

    var loginService = function ($http) {

        var urlBase = '/api/login/';

        this.login = function (credentials) {
            return $http({
                url: urlBase,
                method: 'POST',
                data: JSON.stringify(credentials),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .success(function (res) {
                return res;

            })
            .error(function (err) {
                return err;
            });
        };
    };

    app.service("loginService", ["$http", loginService]);

}(angular.module("appModule")))
