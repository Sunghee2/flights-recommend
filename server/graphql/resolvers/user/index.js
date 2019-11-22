import mongoose from 'mongoose';
import Flight from '../../../models/flight';
import Hotel from '../../../models/hotel';
import Local from '../../../models/local';
import MatchingDataHotel from '../../../models/matching-data-hotel';
import MatchingDataLocal from '../../../models/matching-data-local';
import Ticket from '../../../models/ticket';
import Plan from '../../../models/plan';

const db = mongoose.connection;

function checkUnique(arr, code) {
  const {
    length,
  } = arr;
  if (length > 0 && arr[length - 1].code === code) return false;
  return true;
}

function calculateTripLength(arr) {
  const {
    length,
  } = arr;
  const diff = arr[length - 1].startDt - arr[0].endDt;
  const currDay = 24 * 60 * 60 * 1000;
  const tripLength = (diff / currDay) + 1;
  return tripLength;
}

function createCityObject(name, code) {
  const data = {};
  data.name = name;
  data.code = code;
  return data;
}

function createTicketObject(_id, tripType, tripLength, cities) {
  const data = {};
  data._id = _id;
  data.tripType = tripType;
  data.tripLength = tripLength;
  data.cities = cities;
  return data;
}

function createHotelObejct(hotel) {
  const data = {};
  data.name = hotel.HotelName;
  data.price = hotel.MinRateKRW;
  data.rate = hotel.OverallRating;
  data.image = 'https://q-cf.bstatic.com/images/hotel/max1024x768/148/148999662.jpg';
  data._id = hotel._id;
  return data;
}

function createTourArray(day) {
  const data = [];
  day.tours.map(async (tour) => {
    if (tour.type === 'ticket') {
      const ticket = await Ticket.find({
        _id: tour.id,
      });
      data.push(ticket);
    } else if (tour.type === 'local') {
      const local = await Local.find({
        _id: tour.id,
      });
      data.push(local);
    }
  });
  return data;
}

export default {
  Query: {
    tickets: async () => {
      const tickets = await Flight.find({});
      const ticketArray = [];

      tickets.map((ticket) => {
        const airItnsArray = ticket.itinerary.airItns;
        const {
          length,
        } = airItnsArray;
        const citiesArray = [];

        airItnsArray.map((city, index) => {
          if (index !== 0 && checkUnique(citiesArray, city.startAirp)) {
            citiesArray.push(createCityObject(city.startAirpKr, city.startAirp));
          }
          if (index !== (length - 1) && checkUnique(citiesArray, city.endAirp)) {
            citiesArray.push(createCityObject(city.endAirpKr, city.endAirp));
          }
        });

        const tripLength = calculateTripLength(airItnsArray);
        ticketArray.push(createTicketObject(ticket._id, ticket.tripType, tripLength, citiesArray));
      });
      return ticketArray;
    },
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
    plan: async (_, {
      id,
    }) => {
      const plan = await Plan.find({
        _id: id,
      }).populate('days.hotel');

      const planObject = {
        key: id,
      };
      plan.map((p) => {
        const dayArray = [];
        p.days.map((day) => {
          const dayObject = {};
          dayObject.index = day.day;
          dayObject.hotel = createHotelObejct(day.hotel);
          dayObject.tours = createTourArray(day);
          dayArray.push(dayObject);
        });
        planObject.days = dayArray;
      });

      // $switch, $cond is not allowed in this atlas tier
      // const result = await db.collection('plans').aggregate([{
      //   $cond: {
      //     if: {
      //       $eq: ['days.tours.type', 'ticket'],
      //     },
      //     then: {
      //       $lookup: {
      //         from: 'tickets',
      //         localField: 'days.tours.id',
      //         foreignField: '_id',
      //         as: 'days.tours',
      //       },
      //     },
      //     else: {
      //       $lookup: {
      //         from: 'locals',
      //         localField: 'days.tours.id',
      //         foreignField: '_id',
      //         as: 'days.tours',
      //       },
      //     },
      //   },
      // },
      // {
      //   $rename: {
      //     '$days.HotelName': 'name',
      //     '$days.MinRateKRW': 'price',
      //     '$days.OverallRating': 'rate',
      //   },
      // },
      // ]).toArray();

      return planObject;
    },
  },
  Mutation: {
    createPlan: async (_, {
      plan,
    }) => {
      const newPlan = await Plan.create(plan);

      return newPlan._id;
    },
  },
};
