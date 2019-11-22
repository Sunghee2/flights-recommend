import Hotel from "../../../models/hotel"
import Local from "../../../models/local"
import Plan from "../../../models/plan"
import Ticket from "../../../models/ticket"
import MatchingDataHotel from "../../../models/matching-data-hotel"
import MatchingDataLocal from "../../../models/matching-data-local"
import mongoose from 'mongoose';
var db = mongoose.connection; // db will have the opened connection
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
    recommend_hotel: async (_, {
      airport,
    }) => {
      const hotels = await db.collection("matchingdatahotels").aggregate([
        {"$match": {"airport" : airport}},
        {
          "$lookup": {
            "from": "hotels",
            "localField": "placeId",
            "foreignField": "WKPlaceID",
            "as": "hotels"
          }
        },
        {"$unwind": {"path": "$hotels"}},
        {"$sort": {"hotels.OverallRating": -1}},
      ]).toArray();
    
      for(var i = 0; i < hotels.length; i++){
        hotels[i]['price'] = hotels[i]['hotels']['MinRateKRW'];
        hotels[i]['rate'] = hotels[i]['hotels']['OverallRating'];
        hotels[i]['name'] = hotels[i]['hotels']['HotelName'];
        hotels[i]['image'] = "http://www.nobrandtour.com/upfiles/product/3760188944.jpg"
      }
      return hotels;
    },
    recommend_tour: async (_, {
      airport,
    }) => {
      const locals = await db.collection("matchingdatalocals").aggregate([
        {"$match": {"Iata" : airport}},
        {"$project": {LocalId: { $toInt: '$LocalId'}}},
        { 
          $lookup: {
            from: "locals",
            localField: "LocalId",
            foreignField: "cityIds",
            as: "locals"
          },
        },
      ]).toArray();
      const tickets = await db.collection("matchingdatalocals").aggregate([
        {"$match": {"Iata" : airport}},
        {"$project": {LocalId: { $toInt: '$LocalId'}}},
        { 
          $lookup: {
            from: "tickets",
            localField: "LocalId",
            foreignField: "cityIds",
            as: "tickets"
          }
        },
      ]).toArray();
      var ret = [];
      for(var i = 0; i < tickets[0].tickets.length; i++){
        var ticket = new Object();
        ticket.price = tickets[0].tickets[i]["price"].length == 0 ? 0 : Math.min.apply(0, tickets[0].tickets[i]["price"]);
        ticket.type = 'ticket';
        ticket.rank = parseInt(tickets[0].tickets[i]["rank"] * 100);
        ticket.image = tickets[0].tickets[i]["image"] != null ? tickets[0].tickets[i]["image"] : "";
        ticket.name = tickets[0].tickets[i]["title"];
        ticket._id = i;

        ret[i] = ticket;
      }
      for(var i = 0; i < locals[0].locals.length; i++){
        var local = new Object();
        local.price = locals[0].locals[i]["price"].length == 0 ? 0 : Math.min.apply(0, locals[0].locals[i]["price"]);
        local.type = 'local';
        local.rank = parseInt(locals[0].locals[i]["rank"] * 100);
        local.image = locals[0].locals[i]["image"].length != 0 ? locals[0].locals[i]["image"][0] : "";
        local.name = locals[0].locals[i]["title"];
        local._id = tickets[0].tickets.length + i;
        ret[tickets[0].tickets.length + i] = local;
      }
      
      ret.sort(function (a, b) { 
        if(a.rank == b.rank)return 0;
        if(a.rank == null)return -1;
        if(b.rank == null)return 1;
        return a.rank < b.rank ? -1 : a.rank > b.rank ? 1 : 0;  
      });

      console.log(ret);
      
      return ret;
    }, 
};
