/// <reference path="1-home/home.html" />
(function () {

    // Create the module with a name and with no dependencies
    var app = angular.module("appModule", ["ngRoute", 'ui.bootstrap', "ngAnimate", 'ngCookies']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "app/logged-out/1-home/home.html"
            })
            .when("/current-jobs", {
                templateUrl: "app/logged-out/2-current-jobs/jobs.html"
            })
            .when("/client-services", {
                templateUrl: "app/logged-out/3-client-info/client-info.html"
            })
            .when("/candidate-services", {
                templateUrl: "app/logged-out/4-candidate-info/candidate-info.html"
            })
            .when("/contact-us", {
                templateUrl: "app/logged-out/5-contact-us/contact-us.html"
            })
            .when("/register", {
                templateUrl: "app/logged-out/6-login/register.html"
            })
            .when("/sign-in", {
                templateUrl: "app/logged-out/6-login/login.html",
                controller: "loginController"
            })

            .when("/profile", {
                templateUrl: "app/logged-in/profile/profile.html",
                controller: "profileController"
            })
            .otherwise({ redirectTo: "/home" });
    });

}());