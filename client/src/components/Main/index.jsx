import React from 'react';
import styles from 'styled-components';
import AttractionTab from './AttractionTab';
import Plan from './Plan';

const Container = styles.main`
  display: flex;
`;

const Main = _ => {
  return (
    <Container>
      <AttractionTab />
      <Plan />
    </Container>
  );
};

export default Main;
