/*globals System:true*/
// Configure module loader
System.config({
  baseURL: 'public/',
  defaultJSExtensions: true,
  //transpiler: "none",
  // packages: {
  //   app: {
  //     "main": "app",
  //     format: 'register',
  //     defaultExtension: 'js'
  //   },   
  // },
  meta: {
    './**/*.html': {
      loader: 'text'
    }
  },
  paths: {
    "./*": "app/*",
    "assets/*": "assets/*",
    "github:*": "github.com/*",
    "npm:*": "node_modules/*"
  },  
  map: {
    '_': 'npm:underscore/underscore.js',
    'restangular': 'npm:restangular/dist/restangular',
    'angular-route': 'npm:angular-route/angular-route',    
    'angular': 'npm:angular/angular',
    'ng-template': 'npm:plugin-ng-template/ng-template', // buggy
    'text': 'assets/text'
  }
});