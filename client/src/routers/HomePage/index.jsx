import React from 'react';
import { Link } from 'react-router-dom';
import { CityStore, TotalStore } from '../../stores';
import TicketList from '../../components/TicketList';
import CityList from '../../components/CityList';
import Main from '../../components/Main';
import { IterStore } from '../../stores';

const HomePage = ({ match, history, location }) => {
  return (
    <>
      <IterStore>
        <CityStore>
          <TicketList />
          <CityList />
          <TotalStore>
            <Main />
          </TotalStore>
        </CityStore>
      </IterStore>
    </>
  );
};

export default HomePage;
