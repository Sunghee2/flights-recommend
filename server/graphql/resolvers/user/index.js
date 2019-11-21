import DB from '../../../models/sample';

export default {
  Query: {
    tickets: async () => {
      // const bookings = await DB.flights_bookings.find({}, {segDetails: 1, _id: 1, tripType: 1});
      return [
        { _id: '1', tripType: 'OW', cities: [{ name: '인천', airport: 'INC' }] },
        { _id: '2', tripType: 'RT', cities: [{ name: '바르셀로나', airport: 'BC' }] },
        {
          _id: '3',
          tripType: 'MD',
          cities: [
            { name: '마드리드', airport: 'MD' },
            { name: '뉴욕', airport: 'NY' },
          ],
        },
        {
          _id: '4',
          tripType: 'MD',
          cities: [
            {
              name: '마드리드',
              airport: 'MD',
            },
            {
              name: '인천',
              airport: 'INC',
            },
            {
              name: '바르셀로나',
              airport: 'BC',
            },
          ],
        },
      ];
    },
    // recommend_hotel: async (_, {
    //   airport,
    // }) => {
    //   const hotels = await DB.matching_data_hotel.aggregate([
    //     { "$match": { "airport": airport } },
    //       {
    //           "$lookup": {
    //               "from": "hotel",
    //               "localField": "placeId",
    //               "foreignField": "cityId",
    //               "as": "hotels"
    //           }
    //       }
    //   ]);
    //   return hotels;
    // }, 
    // recommend_tour: async (_, {
    //   airport,
    // }) => {
    //   const LocalId = await DB.matching_data_local.find({Iata : airport});
    //   //cityIds가 어레이인데 어레이안에 있는 애를 어떻게 꺼낼까?
    //   const tickets = await DB.ticket.find({cityIds : LocalId});
    //   const locals = await DB.locals.find({cityIds : LocalId});

    //   return tickets;
    // }, 

    // iter: async (_, {
    //   key,
    // }) => {
    //     const iter = await DB.iters.find({key: key});
    //     return iter;
    // },
  },
  // Mutation: {
  //   post: async (_, {
  //     iter,
  //   }) => {
  //     DB.iters.insert(iter, function(err){
  //         // Object inserted successfully.
  //         return iters._id; // this will return the id of object inserted
  //     });
  //   },
  // },
  
};
