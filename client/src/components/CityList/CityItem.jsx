import React, { useContext, useCallback } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import { CityContext } from './../../stores';

const CityItem = ({ name, airport, active }) => {
  console.log('CityItem');
  const { city, setCity } = useContext(CityContext);
  const ItemBody = Styled.li`
  margin: 0em 0.6em;
  padding: 0.6em 1.2em;
  ${active && `border-bottom: 1px solid white;`}
  font-size: 1.1em;
  color: white;
  cursor: pointer;
`;

  const changeCity = useCallback(() => {
    if (city.airport !== airport) setCity({ name, airport });
  });

  return <ItemBody onClick={changeCity}>{name}</ItemBody>;
};

CityItem.propTypes = {
  name: PropTypes.string.isRequired,
  airport: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default CityItem;
