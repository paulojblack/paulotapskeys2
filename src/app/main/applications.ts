import 'angular';

export class ApplicationsController {
  message: String;

  static $inject = ['$scope'];
  constructor($scope: angular.IScope) {
    this.message = 'Check out some apps I\'ve created and contributed to!';
  }
}
