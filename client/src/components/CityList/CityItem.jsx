import React, { useContext, useCallback } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import { CityContext } from './../../stores';

const ItemBody = Styled.li`
`;

const CityItem = props => {
  console.log('CityItem');
  const { setCity } = useContext(CityContext);
  const changeCity = useCallback(() => {
    setCity({ name: props.name, airport: props.airport });
  });

  return <ItemBody onClick={changeCity}>{props.name}</ItemBody>;
};

CityItem.propTypes = {
  name: PropTypes.string.isRequired,
  airport: PropTypes.string.isRequired,
};

export default CityItem;
