import 'angular';

export class ApplicationsController {
  message: String;

  static $inject = ['$scope'];
  constructor($scope: angular.IScope) {
    this.message = 'In the applications view';
  }
}
