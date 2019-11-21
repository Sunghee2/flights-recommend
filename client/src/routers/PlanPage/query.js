import gql from 'graphql-tag';

export default gql`
  query getPlan($key: String!) {
    getPlan(key: $key) {
      index
      hotel {
        _id
        name
        price
        rate
        image
      }
      tours {
        _id
        name
        price
        rank
        image
      }
    }
  }
`;
