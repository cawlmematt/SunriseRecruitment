(function (app) {

    var navTabsService = function ($rootScope) {

        var self = this;

        // Private Tabs Data
        var tabs = [
            { text: "Questionnaires", href: "#/questionnaires/", selected: false, icon: "icon-file" },
            { text: "Questions", href: "#/questions", selected: false, icon: "icon-question-sign" },
            { text: "Response Groups", href: "#/response-groups", selected: false, icon: "icon-check" },
            { text: "Tags", href: "#/tags", selected: false, icon: "icon-tag" }
        ];

        // Public method to encapsulate the logic of selecting/unselecting of tabs.
        this.setSelected = function (text) {
            for (var i = 0; i < tabs.length; i++) {
                var currentTabObj = tabs[i];

                currentTabObj.selected = currentTabObj.text === text ? true : false;
            };

        };

        // Expose the Tabs Data publicly
        this.tabs = tabs;
    };

    app.service("navTabs", [navTabsService]);

}(angular.module("appModule")))
