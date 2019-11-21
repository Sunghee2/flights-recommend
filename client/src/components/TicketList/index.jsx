import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { CityContext } from './../../stores';

const TicketList = _ => {
  const { cityList, setCityList } = useContext(CityContext);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default TicketList;
