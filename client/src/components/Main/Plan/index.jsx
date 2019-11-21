import React, { useEffect, useContext } from 'react';
import styles from 'styled-components';
import { IterContext } from '../../../stores';
import DayPlan from './DayPlan';

const Section = styles.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: .4em;
`;

const Title = styles.h2`
  color: white;
  font-size: 1.1em;
  padding: .4em;
  margin: .6em;
`;

const Plan = _ => {
  console.log('plan');
  const { days } = useContext(IterContext);

  useEffect(() => {
    console.log(days);
  }, [days]);

  return (
    <Section>
      <Title>일정</Title>
      {days.map(({ index, hotel, tours }) => (
        <DayPlan key={index} index={index} hotel={hotel} tours={tours} />
      ))}
    </Section>
  );
};

export default Plan;
