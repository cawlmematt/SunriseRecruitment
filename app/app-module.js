/// <reference path="1-home/home.html" />
(function () {

    // Create the module with a name and with no dependencies
    var app = angular.module("appModule", ["ngRoute", 'ui.bootstrap', "ngAnimate", 'ngCookies']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "app/public/1-home/home.html"
            })
            .when("/current-jobs", {
                templateUrl: "app/public/2-current-jobs/jobs.html"
            })
            .when("/client-services", {
                templateUrl: "app/public/3-client-info/client-info.html"
            })
            .when("/candidate-services", {
                templateUrl: "app/public/4-candidate-info/candidate-info.html"
            })
            .when("/contact-us", {
                templateUrl: "app/public/5-contact-us/contact-us.html"
            })
            .when("/register", {
                templateUrl: "app/shared/register/register.html"
            })
            .when("/sign-in", {
                templateUrl: "app/shared/login/login.html",
                controller: "loginController"
            })
            .otherwise({ redirectTo: "/home" });
    });

}());