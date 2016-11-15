var debug = require('debug')('frontend:index');
var Hapi = require('hapi');
var RuthaUtils = require('rutha-utils');
var routes = require('./routes');
// Hapi 9.x !
var Inert = require('inert');


var config = RuthaUtils.createConfig({
  path: {
    config: __dirname + '/../../config'
  }
}).load();

var logger = RuthaUtils.createLogger({
  filename: config.get('logger:filename')
});

var viewOptions = require('./server_options');

// Create a server with a host and port
var server = module.exports = new Hapi.Server();
server.connection({
    host: config.get('apiServer:host'),
    port: config.get('apiServer:port')
});

// Create a canned response server
var canned = new Hapi.Server();
canned.connection({
    host: config.get('apiServer:host'),
    port: 9002
});

var compiler = function(template, options) {
  return require('underscore').template(template, options || { });
};

var controllers = [
  {
    register: require('../controllers/main')
  }
];

var logOptions = {
    reporters: [{
            reporter: require('good-console'),
            events: {hapi: '*', log: '*', response: '*',  error: '*', 'request': '*' }
        }]
}

// we need to include it here, to allow specs to work (module.parent)
function LoadServer(server, controllers) {
  server.register([
      {
          register: require('hapi-auth-cookie')
      },
      {
          register: require('bell')
      },
      {
          register: require('vision')
      },
      {
          register: Inert
      },
    {
        register: require('good'),
        options: logOptions
    }
    ], function(err) {


    // views
    server.views(viewOptions);

    // statics
    server.route(routes.assets);

    // health check
    server.route(routes.health);

    server.auth.strategy('facebook', 'bell', {
        provider: 'facebook',
        password: 'some password',
        clientId: config.get('facebook:clientId'),
        clientSecret: config.get('facebook:clientSecret'),
        isSecure: false     // Only used for dev env
    });

    server.auth.strategy('session', 'cookie', {
        password: 'some password',
        cookie: 'sid',
        redirectTo: false,
        isSecure: false,
        ttl: 30 * 60 * 1000
    });


    server.register(controllers, function(err) {
      if (!module.parent) {
        server.start(function () {
          debug('Server started at port ' + server.info.port);
        });
      }
    });

  });
}

new LoadServer(server, controllers);
