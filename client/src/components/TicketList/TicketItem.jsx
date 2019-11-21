import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CityContext, IterContext } from './../../stores';

const ItemBody = styled.li`
  margin: 2em 2em;
  padding: 1em 1.6em;
  font-size: 24px;
  color: white;
`;
const Type = styled.div``;

const TicketItem = ({ length, tripType, cities }) => {
  const { setCityList, setCity } = useContext(CityContext);
  const { setDays } = useContext(IterContext);

  const selectTicket = useCallback(_ => {
    setCityList(cities);
    setCity(cities[0]);
    setDays(
      new Array(length).fill(0).map((_, index) => ({
        index: index + 1,
        hotel: {},
        tours: [],
      })),
    );
  });
  return (
    <ItemBody onClick={selectTicket}>
      <Type>{tripType}</Type>
    </ItemBody>
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
