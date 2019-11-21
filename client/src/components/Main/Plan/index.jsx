import React, { useEffect, useContext } from 'react';
import { IterContext } from '../../../stores';
import DayPlan from './DayPlan';

const Plan = _ => {
  console.log('plan');
  const { days } = useContext(IterContext);
  console.log(days);
  return (
    <div>
      <div>일정</div>
      {days.map((day, index) => {
        <DayPlan index={index} hotel={day.hotel} tours={day.tours} />;
      })}
    </div>
  );
};

export default Plan;
