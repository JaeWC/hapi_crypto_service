'use strict';

const controllerName = 'bithumb';
const DEBUG = require('debug')(controllerName);
const axios = require('axios');

const internals = {};

internals.info = async (request, h) => {
  const infoType = request.params.info || 'tiker';
  const crytoCurrency = request.params.currency;

  try {
    const result = await axios.get(
      `https://api.bithumb.com/public/${infoType}/${crytoCurrency}`
    );

    return h.response(result.data);
  } catch (e) {
    throw e;
  }
};

exports = module.exports = internals;
