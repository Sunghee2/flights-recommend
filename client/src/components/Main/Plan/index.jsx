import React, { useEffect, useContext } from 'react';
import styles from 'styled-components';
import { IterContext } from '../../../stores';
import DayPlan from './DayPlan';

const Section = styles.section`
  display: flex;
  flex: 1;
`;

const Plan = _ => {
  console.log('plan');
  const { days } = useContext(IterContext);

  useEffect(() => {
    console.log(days);
  }, [days]);

  return (
    <Section>
      <div>일정</div>
      {days.map(({ index, hotel, tours }) => (
        <DayPlan key={index} index={index} hotel={hotel} tours={tours} />
      ))}
    </Section>
  );
};

export default Plan;
