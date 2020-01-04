import Flight from '../../models/flight';

function checkUnique(arr, airport) {
  const {
    length,
  } = arr;
  if (length > 0 && arr[length - 1].airport === airport) return false;
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

function createCityObject(name, airport) {
  return {
    name,
    airport
  };
}

function createTicketObject(_id, tripType, tripLength, cities) {
  return {
    _id,
    tripType,
    tripLength,
    cities,
  };
}

export default {
  Query: {
    tickets: async () => {
      const tickets = await Flight.find({});

      const ticketArray = tickets.map((ticket) => {
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
        return createTicketObject(ticket._id, ticket.tripType, tripLength, citiesArray);
      });
      return ticketArray;
    },
  },
};