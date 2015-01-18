(function (app) {

    var thisController = function ($scope, $location, jobService) {

        var init = function () {
            jobService.getJobs()
                .success(function(data){
                    $scope.jobs = data;
                });
        }

        $scope.jobs = [];

        init();
    };

    app.controller("current-jobs-controller", ["$scope", "$location", "jobService", thisController]);

}(angular.module("appModule")));


