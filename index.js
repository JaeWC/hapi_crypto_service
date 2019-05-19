'use strict';

const Hapi = require('@hapi/hapi');

const server = Hapi.server({
  port: 7000,
  host: 'localhost'
});

const init = async () => {
  server.route(require('./src/routes/upbit'));
  server.route(require('./src/routes/bithumb'));

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello World!';
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
