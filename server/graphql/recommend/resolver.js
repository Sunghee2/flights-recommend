import mongoose from 'mongoose';

const db = mongoose.connection;

export default {
  Query: {
    recommend_hotel: async (_, {
      airport,
    }) => {
      const hotels = await db.collection('matchingdatahotels').aggregate([{
        $match: {
          airport,
        },
      },
      {
        $lookup: {
          from: 'hotels',
          localField: 'placeId',
          foreignField: 'WKPlaceID',
          as: 'hotels',
        },
      },
      {
        $unwind: {
          path: '$hotels',
        },
      },
      {
        $sort: {
          'hotels.OverallRating': -1,
        },
      },
      ]).toArray();

      for (let i = 0; i < hotels.length; i++) {
        hotels[i].price = hotels[i].hotels.MinRateKRW;
        hotels[i].rate = hotels[i].hotels.OverallRating;
        hotels[i].name = hotels[i].hotels.HotelName;
        hotels[i].image = 'http://www.nobrandtour.com/upfiles/product/3760188944.jpg';
      }
      return hotels;
    },
    recommend_tour: async (_, {
      airport,
    }) => {
      const locals = await db.collection('matchingdatalocals').aggregate([{
        $match: {
          Iata: airport,
        },
      },
      {
        $project: {
          LocalId: {
            $toInt: '$LocalId',
          },
        },
      },
      {
        $lookup: {
          from: 'locals',
          localField: 'LocalId',
          foreignField: 'cityIds',
          as: 'locals',
        },
      },
      ]).toArray();
      const tickets = await db.collection('matchingdatalocals').aggregate([{
        $match: {
          Iata: airport,
        },
      },
      {
        $project: {
          LocalId: {
            $toInt: '$LocalId',
          },
        },
      },
      {
        $lookup: {
          from: 'tickets',
          localField: 'LocalId',
          foreignField: 'cityIds',
          as: 'tickets',
        },
      },
      ]).toArray();
      const ret = [];
      for (var i = 0; i < tickets[0].tickets.length; i++) {
        const ticket = new Object();
        ticket.price = tickets[0].tickets[i].price.length == 0 ? 0 : Math.min.apply(0, tickets[0].tickets[i].price);
        ticket.type = 'ticket';
        ticket.rank = parseInt(tickets[0].tickets[i].rank * 100);
        ticket.image = tickets[0].tickets[i].image != null ? tickets[0].tickets[i].image : '';
        ticket.name = tickets[0].tickets[i].title;
        ticket._id = i;

        ret[i] = ticket;
      }
      for (var i = 0; i < locals[0].locals.length; i++) {
        const local = new Object();
        local.price = locals[0].locals[i].price.length == 0 ? 0 : Math.min.apply(0, locals[0].locals[i].price);
        local.type = 'local';
        local.rank = parseInt(locals[0].locals[i].rank * 100);
        local.image = locals[0].locals[i].image.length != 0 ? locals[0].locals[i].image[0] : '';
        local.name = locals[0].locals[i].title;
        local._id = tickets[0].tickets.length + i;
        ret[tickets[0].tickets.length + i] = local;
      }

      ret.sort((a, b) => {
        if (a.rank == b.rank) return 0;
        if (a.rank == null) return -1;
        if (b.rank == null) return 1;
        return a.rank < b.rank ? -1 : a.rank > b.rank ? 1 : 0;
      });

      console.log(ret);

      return ret;
    },
  },
};
