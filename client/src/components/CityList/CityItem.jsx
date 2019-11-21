import React, { useContext, useCallback } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import { CityContext } from './../../stores';

const ItemBody = Styled.li`
`;

const CityItem = ({ name, airport }) => {
  console.log('CityItem');
  const { setCity } = useContext(CityContext);

  const changeCity = useCallback(() => {
    setCity({ name, airport });
  });

  return <ItemBody onClick={changeCity}>{props.name}</ItemBody>;
};

CityItem.propTypes = {
  name: PropTypes.string.isRequired,
  airport: PropTypes.string.isRequired,
};

export default CityItem;
