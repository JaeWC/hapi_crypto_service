'use strict';

const controllerName = 'upbit';
const DEBUG = require('debug')(controllerName);
const axios = require('axios');

const token = require('../services/upbit.service');

const internals = {};

internals.myAccount = async (request, h) => {
  try {
    const result = await axios.get('https://api.upbit.com/v1/accounts', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return h.response(result.data);
  } catch (e) {
    throw e;
  }
};

internals.candles = async (request, h) => {
  const searchPeriod = request.params.period || 60;
  const crytoCurrency = request.params.name;
  const candleCount = request.params.count || 1;

  try {
    const result = await axios.get(
      `https://api.upbit.com/v1/candles/minutes/${searchPeriod}`,
      {
        params: { market: `KRW-${crytoCurrency}`, count: candleCount }
      }
    );

    return h.response(result.data);
  } catch (e) {
    throw e;
  }
};

internals.current = async (request, h) => {
  const crytoCurrency = request.params.name;

  try {
    const result = await axios.get('https://api.upbit.com/v1/ticker', {
      params: { markets: `KRW-${crytoCurrency}` }
    });

    return h.response(result.data);
  } catch (e) {
    throw e;
  }
};

exports = module.exports = internals;
