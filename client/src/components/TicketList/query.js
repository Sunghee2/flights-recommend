import gql from 'graphql-tag';

export default gql`
  query {
    tripType
    _id
    cities {
      name
      airport
    }
  }
`;
