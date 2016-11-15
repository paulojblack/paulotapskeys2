// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/
System.register(['angular', '_', 'restangular', 'angular-route', './main/index', './main/index.html!text'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_html_text_1;
    function RestangularConfig(RestangularProvider) {
        RestangularProvider.setFullResponse(true);
        RestangularProvider.setBaseUrl('/api');
    }
    function RouteConfig($routeProvider) {
        $routeProvider.
            // when('/signup', {
            //     template: SignupTpl,
            //     controllerAs: 'vm',
            //     controller: SignupController
            // }).
            otherwise({
            controller: index_1.TestController,
            controllerAs: 'vm',
            template: index_html_text_1.default
        });
    }
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_html_text_1_1) {
                index_html_text_1 = index_html_text_1_1;
            }],
        execute: function() {
            // import SignupTpl from './main/signup.html!text';
            RestangularConfig.$inject = ['RestangularProvider'];
            RouteConfig.$inject = ['$routeProvider'];
            angular.module('app', ['ngRoute', 'restangular'])
                .config(RestangularConfig)
                .config(RouteConfig);
            angular.bootstrap(document, ['app'], {
                strictDi: true
            });
        }
    }
});
//# sourceMappingURL=app.js.map