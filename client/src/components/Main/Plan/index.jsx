import React, { useEffect, useContext } from 'react';
import { IterContext } from '../../../stores';

const Plan = _ => {
  console.log('plan');
  const { days } = useContext(IterContext);
  return (
    <div>
      <div>일정 {days.length}</div>
    </div>
  );
};

export default Plan;
