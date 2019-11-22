import gql from 'graphql-tag';

export default gql`
  query($airport: String!) {
    recommand_hotel(airport: $airport) {
      name
      price
      rate
      image
      _id
    }
    recommand_tour(airport: $airport) {
      name
      price
      rank
      image
      _id
    }
  }
`;
