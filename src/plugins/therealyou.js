'use strict';

module.exports = async function(server) {
  try {
    await server.register(require('therealyou'));
  } catch (e) {
    console.log(['error', 'plugin'], 'plugin: therealyou register error', e);
    throw e;
  }
  console.log(['info', 'plugin'], 'plugin: therealyou registered');
};
