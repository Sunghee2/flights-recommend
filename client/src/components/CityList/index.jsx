import React, { useContext } from 'react';
import Styled from 'styled-components';
import CityItem from './CityItem';
import { CityContext } from './../../stores';

const ListBody = Styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
`;
const ItemName = Styled.div`

`;
const ItemDate = Styled.div`
  
`;

const CityList = props => {
  console.log('CityList');
  const { city, cityList } = useContext(CityContext);
  const currentCity = city.name;
  console.log(cityList);
  console.log(city);
  return (
    <ListBody>
      {cityList.map((city, index) => (
        <CityItem
          key={index}
          name={city.name}
          airport={city.airport}
          active={city.name === currentCity}
        />
      ))}
    </ListBody>
  );
};

export default CityList;
