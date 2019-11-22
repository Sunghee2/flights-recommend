import gql from 'graphql-tag';

export default gql`
  query {
    tickets {
      tripType
      _id
      tripLength
      cities {
        name
        airport
      }
    }
  }
`;
