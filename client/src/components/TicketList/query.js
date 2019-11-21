import gql from 'graphql-tag';

export default gql`
  query {
    tickets {
      name
      airport
    }
  }
`;
