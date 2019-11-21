import React, { useContext } from 'react';
import { IterContext, IterStore } from './IterStore';

const Plan = _ => {
  const { days } = useContext(IterContext);
  return (
    <div>
      <IterStore>
        <div>일정</div>
      </IterStore>
    </div>
  );
};

export default Plan;
