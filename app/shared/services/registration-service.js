(function (app) {

    var registratonService = function ($http) {

        var urlBase = '/api/registration/';

        this.register = function (registrationData) {
            return $http({
                url: urlBase,
                method: 'POST',
                data: JSON.stringify(registrationData),
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

    app.service("registrationService", ["$http", registratonService]);

}(angular.module("appModule")))
