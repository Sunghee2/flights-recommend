import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CityContext, IterContext } from './../../stores';

const Type = styled.div``;

const TicketItem = ({ length, tripType, cities }) => {
  const { setCityList, setCity } = useContext(CityContext);
  const { setDays } = useContext(IterContext);

  const selectTicket = useCallback(_ => {
    setCityList(cities);
    setCity(cities[0]);
    setDays(new Array(length).fill(0));
  });
  return (
    <div onClick={selectTicket}>
      <Type>{tripType}</Type>
    </div>
  );
};

TicketItem.propTypes = {
  tripType: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      airport: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TicketItem;
