import React from 'react';
import Styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import GET_TICKETS from './query';
import TicketItem from './TicketItem';

const ListBody = Styled.ul`
  display: flex;
  justify-content: center;
`;

const TicketList = _ => {
  const { loading, error, data } = useQuery(GET_TICKETS);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  console.log('data', data);
  const Tickets = data.tickets.map(({ _id, tripType, cities, tripLength }) => (
    <TicketItem key={_id} tripType={tripType} length={tripLength} cities={cities} />
  ));

  return <ListBody>{Tickets}</ListBody>;
};

export default TicketList;
