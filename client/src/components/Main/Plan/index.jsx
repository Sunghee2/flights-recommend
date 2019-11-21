import React, { useEffect, useContext } from 'react';
import { IterContext } from '../../../stores';
import DayPlan from './DayPlan';

const Plan = _ => {
  console.log('plan');
  const { days } = useContext(IterContext);

  useEffect(() => {
    console.log(days);
  }, [days]);

  return (
    <div>
      <div>일정</div>
      {days.map(({ index, hotel, tours }) => (
        <DayPlan key={index} index={index} hotel={hotel} tours={tours} />
      ))}
    </div>
  );
};

export default Plan;
