export default `
  type Day {
    index: Int!
    hotel: Hotel!
    tours: [Tour]!
  }

  type Iter {
    key: String!
    days: [Day]!
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
    rate: Int!
    image: String!
    _id: String!
  }
 
  type Tour {
    name: String!
    price: Int!
    rank: Float!
    image: String!
    _id: String!
  }
 
  type Query {
    tickets: [Ticket]!
  }
`;
 
 
 