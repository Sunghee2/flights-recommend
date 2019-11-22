export default `
  type Day {
    index: Int!
    hotel: Hotel!
    tours: [Tour]!
  }

  input TourInput {
    type: String!
    id: ID!
  }

  input DayInput {
    day: Int!
    hotel: ID!
    tours: [TourInput]!
  }

  input PlanInput {
    days: [DayInput]!
  }

  type Plan {
    key: String!
    days: [Day]!
  }

  type Mutation {
    createPlan(plan: PlanInput!): String!
  }

  type Ticket {
    _id: ID!
    tripType: String!
    tripLength: Int!
    cities: [City]!
  }

  type City {
    name: String!
    code: String!
  }

  type Hotel {
    name: String!
    price: Int!
    rate: Float!
    image: String!
    _id: String!
  }

  type Tour {
    title: String!
    price: Int!
    rank: Float!
    image: String!
    _id: String!
  }

  type Query {
    tickets: [Ticket]!
    recommend_hotel(airport: String!): [Hotel]!
    recommend_tour(airport: String!): [Tour]!
    plan(id: ID!): Plan!
  } 
`;
