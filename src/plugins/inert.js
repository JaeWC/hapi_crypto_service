'use strict';

//Static file and directory handlers plugin for hapi.js.
const Inert = require('@hapi/inert');

exports = module.exports = async server => {
  try {
    await server.register(Inert);
  } catch (e) {
    console.error(['error', 'plugin'], 'plugin: inert register error', e);
    throw e;
  }
  console.log(['info', 'plugin'], 'plugin: inert registered');

  return true;
};
