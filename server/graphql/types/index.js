export default `
  type Day {
    index: Int!
    hotel: Hotel!
    tours: [Tour]!
  }
 
  type Iter {
    day: [Day]!
  }
 
  type Mutation {
    post(iter: Iter!): String!
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
    tickets: [City]!
    recommand_hotel(airport: String!): [Hotel]!
    recommand_tour(airport: String!): [Tour]!
    iter: Iter!
  }
`;
 
 
 