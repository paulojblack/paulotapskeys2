System.register(['angular'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ApplicationsController;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            ApplicationsController = (function () {
                function ApplicationsController($scope) {
                    this.message = 'In the applications view';
                }
                ApplicationsController.$inject = ['$scope'];
                return ApplicationsController;
            }());
            exports_1("ApplicationsController", ApplicationsController);
        }
    }
});
//# sourceMappingURL=applications.js.map