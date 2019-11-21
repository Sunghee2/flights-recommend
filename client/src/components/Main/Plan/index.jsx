import React, { useEffect, useContext, useCallback } from 'react';
import styles from 'styled-components';
import { IterContext } from '../../../stores';
import DayPlan from './DayPlan';

const Section = styles.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: .4em;
`;

const Head = styles.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styles.h2`
  color: white;
  font-size: 1.1em;
  padding: .4em;
  margin: .6em;
`;

const Send = styles.button`
background: transparent;
border: transparent;
font-style: bold;
font-size: 1.1em;
color: white;
cursor: pointer;
outline: none;
`;

const Container = styles.div`
  background: rgba(255,255,255,0.5);
  height: 100%;
  margin-bottom: 1em;
  border-radius: .6em;
  padding: .6em;
`;

const Plan = _ => {
  console.log('plan');
  const { days } = useContext(IterContext);

  const sendPlan = useCallback(() => {});
  useEffect(() => {
    console.log(days);
  }, [days]);

  return (
    <Section>
      <Head>
        <Title>일정</Title>
        <Send onClick={sendPlan}>보내기</Send>
      </Head>
      <Container>
        {days.map(({ index, hotel, tours }) => (
          <DayPlan key={index} index={index} hotel={hotel} tours={tours} />
        ))}
      </Container>
    </Section>
  );
};

export default Plan;
