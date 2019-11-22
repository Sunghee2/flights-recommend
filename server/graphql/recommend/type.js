export default `
  type Query {
    recommend_hotel(airport: String!): [Hotel]!
    recommend_tour(airport: String!): [Tour]!
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
    rank: Float!
    image: String!
    _id: String!
  }
`;
