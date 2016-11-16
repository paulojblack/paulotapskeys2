// http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/

import 'angular';
import '_';
import 'restangular';
import 'angular-route';


import {TestController} from './main/index';
import {ApplicationsController} from './main/applications';

import IndexTpl from './main/index.html!text';
import ApplicationsTpl from './main/applications.html!text';

RestangularConfig.$inject = ['RestangularProvider'];
function RestangularConfig(RestangularProvider: any) {
    RestangularProvider.setFullResponse(true);
    RestangularProvider.setBaseUrl('/api');
}

RouteConfig.$inject = ['$routeProvider'];
function RouteConfig($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.
        when('/applications', {
            template: ApplicationsTpl,
            controllerAs: 'vm',
            controller: ApplicationsController
        }).
        otherwise({
            controller: TestController,
            controllerAs: 'vm',
            template: IndexTpl
        });
}

angular.module('app', ['ngRoute', 'restangular'])
    .config(RestangularConfig)
    .config(RouteConfig);

angular.bootstrap(document, ['app'], {
    strictDi: true
});
