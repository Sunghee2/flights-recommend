export default `
  type Query {
    plan(id: ID!): Plan!
  }

  type Mutation {
    createPlan(plan: PlanInput!): String!
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

  type Day {
    index: Int!
    hotel: Hotel!
    tours: [Tour]!
  }

  type Tour {
    name: String!
    price: Int!
    rank: Float!
    image: String!
    _id: String!
  }

  type Hotel {
    name: String!
    price: Int!
    rate: Float!
    image: String!
    _id: String!
  }
`;
