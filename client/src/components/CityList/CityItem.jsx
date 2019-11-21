import React, { useContext, useCallback } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import { CityContext } from './../../stores';

const ItemBody = Styled.li`
  margin: 0em 0.6em;
  padding: 0.6em 1.2em;
  border: solid 0.5px white;
  border-radius: 3em;
  color: white;
`;

const CityItem = ({ name, airport }) => {
  console.log('CityItem');
  const { city, setCity } = useContext(CityContext);

  const changeCity = useCallback(() => {
    if (city.airport !== airport) setCity({ name, airport });
  });

  return <ItemBody onClick={changeCity}>{name}</ItemBody>;
};

CityItem.propTypes = {
  name: PropTypes.string.isRequired,
  airport: PropTypes.string.isRequired,
};

export default CityItem;
