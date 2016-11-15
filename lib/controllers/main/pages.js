var Hapi = require('hapi');
var debug = require('debug')('frontend:pages');

exports.index = function(request, reply) {

  request.server.render('partials/header', {}, function(err, rendered, config) {
    reply.view('index', {
      title: 'Paulo Taps Keys',
    });
  });

};
