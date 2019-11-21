import gql from 'graphql-tag';

export default gql`
  fragment IterParts on Iter {
    day {
      index
      hotel {
        name
        price
        rate
        image
        _id
      }
      tours {
        name
        price
        rank
        image
        _id
      }
    }
  }
`;
