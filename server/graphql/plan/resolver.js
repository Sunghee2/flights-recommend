import Plan from '../../models/plan';
import Ticket from '../../models/ticket';
import Local from '../../models/local';
import Hotel from '../../models/hotel';

function createHotelObejct(hotel) {
  return {
    name: hotel.HotelName,
    price: hotel.MinRateKRW,
    rate: hotel.OverallRating,
    image: 'https://q-cf.bstatic.com/images/hotel/max1024x768/148/148999662.jpg',
    _id: hotel._id
  };
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
          const dayObject = {
            index: day.day,
            hotel: createHotelObejct(day.hotel),
            tours: createTourArray(day),
          };
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