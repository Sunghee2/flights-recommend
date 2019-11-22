export default `
  type Query {
    tickets: [Ticket]!
  }

  type Ticket {
    _id: ID!
    tripType: String!
    tripLength: Int!
    cities: [City]!
  }

  type City {
    name: String!
    airport: String!
  }
`;
