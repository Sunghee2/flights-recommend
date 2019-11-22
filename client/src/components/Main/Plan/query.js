import gql from 'graphql-tag';

export default gql`
  mutation createPlan($plan: planInput!) {
    createPlan(plan: $plan) {
      key
    }
  }

  input planInput {
    days: [DayInput]!
  }

  input DayInput {
    day: Int!
    hotel: ID!
    tours: [TourInput]!
  }

  input TourInput {
    type: String!
    id: ID!
  }
`;
