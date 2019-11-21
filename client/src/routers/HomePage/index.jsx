import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'styled-components';
import { CityStore, TotalStore } from '../../stores';
import TicketList from '../../components/TicketList';
import CityList from '../../components/CityList';
import Main from '../../components/Main';
import { IterStore } from '../../stores';

const Container = styles.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const HomePage = ({ match, history, location }) => {
  return (
    <Container>
      <IterStore>
        <CityStore>
          <TicketList />
          <CityList />
          <TotalStore>
            <Main />
          </TotalStore>
        </CityStore>
      </IterStore>
    </Container>
  );
};

export default HomePage;
