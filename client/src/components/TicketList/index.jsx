import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import GET_TICKETS from './query';
import { CityContext } from './../../stores';

const TicketList = _ => {
  const { cityList, setCityList } = useContext(CityContext);
  const { loading, error, data } = useQuery(GET_TICKETS);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;

  return (
    <div>
      <div></div>
    </div>
  );
};

export default TicketList;
