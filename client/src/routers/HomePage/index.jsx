import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
import { CityStore } from '../../stores';
import TicketList from '../../components/TicketList';
import CityList from '../../components/CityList';

const HomePage = ({ match, history, location }) => {
  return (
    <div>
      <CityStore>
        <Link to="/plan/111">Plan</Link>
        <TicketList />
        <CityList />
        <Title label="Hello World!" />
      </CityStore>
    </div>
  );
};

export default HomePage;
