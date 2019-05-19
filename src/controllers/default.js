'use strict';
const DEBUG = require('debug')('api');
const version = require('../../package').version;

class ControllerAPI {
  constructor() {}
  root(request, h) {
    return h.view('index', { title: 'Jae', version });
  }
  health(request, h) {
    return h.response('OK');
  }
}
exports = module.exports = new ControllerAPI();
