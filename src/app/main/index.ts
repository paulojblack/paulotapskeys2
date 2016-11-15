import 'angular';

export class TestController {
  message: String;

  static $inject = ['$scope'];
  constructor($scope: angular.IScope) {
    this.message = 'Welcome to the site! If you can\'t tell, I\'m more of a back-end guy';
  }
}
