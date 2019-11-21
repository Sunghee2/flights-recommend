import gql from 'graphql-tag';

export default gql`
  query ($airport: String!) {
    recommand_hotel(airport: $airport) {
        name: String!
        price: Int!
        rate: Int!
        image: String!
        _id: String!
    }
    recommand_tour(airport: $airport) {
        name: String!
        price: Int!
        rank: Float!
        image: String!
        _id: String!
    }
  }
`;
