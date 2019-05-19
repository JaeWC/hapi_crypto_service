'use strict';

const bithumbController = require('../controllers/bithumb');

exports = module.exports = (function() {
  return [
    {
      method: 'GET',
      path: '/v1/bithumb/{info}/{currency}',
      options: {
        description: 'Public Information of Specific Currency at Bithumb',
        notes: 'Information',
        tags: ['api', 'bithumb', 'info'],
        handler: bithumbController.info
      }
    }
  ];
})();
