const sign = require('jsonwebtoken').sign;
require('dotenv').config();

const payload = {
  access_key: process.env.UPBIT_ACCESS_KEY,
  nonce: new Date().getTime()
};

const token = sign(payload, process.env.UPBIT_SECRET_KEY);

module.exports = token;
