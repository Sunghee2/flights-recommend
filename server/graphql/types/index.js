export default `
  type Day {
    index: Int!
    hotel: Hotel!
    tours: [Tour]!
  }

  input InputHotel {
    name: String!
    price: Int!
    rate: Int!
    image: String!
    _id: String!
  }

  input InputTour {
    name: String!
    price: Int!
    rank: Float!
    image: String!
    _id: String!
  }

  input InputDay {
    index: Int!
    hotel: InputHotel!
    tours: [InputTour]!
  }

  input InputIter {
    days: InputDay!
  }

  type Iter {
    key: String!
    days: [Day]!
  }

  type Mutation {
    post(iter: InputIter!): String!
  }

  type Ticket {
    tripType: String!
    _id: String!
    cities: [City]!
  }

  type City {
    name: String!
    airport: String!
  }

  type Hotel {
    name: String!
    price: Int!
    rate: Float!
    image: String!
    _id: String!
  }

  type Tour {
    name: String!
    price: Int!
    rank: Int!
    image: String!
    _id: String!
  }

  type Query {
    tickets: [Ticket]!
    recommend_hotel(airport: String!): [Hotel]!
    recommend_tour(airport: String!): [Tour]!
    iter(key: String!): Iter!
  }
`;
 
 
 