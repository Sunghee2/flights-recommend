import React from 'react';
import { Link } from 'react-router-dom';
import { CityStore, TotalStore } from '../../stores';
import TicketList from '../../components/TicketList';
import CityList from '../../components/CityList';
import Main from '../../components/Main';
import { IterStore } from '../../stores';

const HomePage = ({ match, history, location }) => {
  return (
    <div>
      <IterStore>
        <CityStore>
          <Link to="/plan/111">Plan</Link>
          <TicketList />
          <CityList />
          <TotalStore>
            <Main />
          </TotalStore>
        </CityStore>
      </IterStore>
    </div>
  );
};

export default HomePage;
