import React, { useContext } from 'react';
import Styled from 'styled-components';

const ListBody = Styled.ul`
`;

const AttractionList = props => {
  console.log('AttractionList');
  return <ListBody>Attraction List</ListBody>;
};

export default AttractionList;
