'use strict';

const upbitController = require('../controllers/upbit');

exports = module.exports = (function() {
  return [
    {
      method: 'GET',
      path: '/v1/accounts',
      options: {
        description: 'My Accounts at Upbit',
        notes: 'Account',
        tags: ['api', 'account'],
        handler: upbitController.myAccount
      }
    },

    {
      method: 'GET',
      path: '/v1/status/{name}/{count?}',
      options: {
        description: 'Price of Specific Cryptocurrency at Upbit',
        notes: 'Account',
        tags: ['api', 'account'],
        handler: upbitController.candles
      }
    },

    {
      method: 'GET',
      path: '/v1/current/{name}',
      options: {
        description: 'Price of Specific Cryptocurrency at Upbit',
        notes: 'Account',
        tags: ['api', 'account'],
        handler: upbitController.current
      }
    }

    //   {
    //     method: 'GET',
    //     path: '/v1/{serviceId}/stats/reservations/{placeNo}',
    //     options : {
    //         description: '예약 통계 ( 예약수[reservationCount] , 예약판매액[reservationAmount] )',
    //         notes: '예약통계',
    //         tags :['api','reservation' ],
    //         handler: reservationController.statsReservations,
    //         validate: ApiValidate.statsReservations
    //     }
    // },
  ];
})();
