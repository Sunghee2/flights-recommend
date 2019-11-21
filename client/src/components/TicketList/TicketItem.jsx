import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CityContext } from './../../stores';

const Type = styled.div``;

const TicketItem = ({ tripType, cities }) => {
  const { setCityList } = useContext(CityContext);
  const selectTicket = useCallback(_ => {
    setCityList(cities);
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
