import gql from 'graphql-tag';

export default gql`
  query {
    tripType
    _id
    length
    cities {
      name
      airport
    }
  }
`;
