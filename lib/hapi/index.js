const debug = require('debug')('frontend:index');
const Hapi = require('hapi');
const routes = require('./routes');
const Inert = require('inert');

//investigate this
const viewOptions = require('./server_options');

// Create a server with a host and port
var server = module.exports = new Hapi.Server();
server.connection({
    host: '0.0.0.0',
    port: '8080'
});

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
