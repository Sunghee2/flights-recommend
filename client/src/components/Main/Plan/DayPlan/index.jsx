import React from 'react';

import HotelPlan from './HotelPlan';
import TourPlan from './TourPlan';

const DayPlan = _ => {
  const Tours = [].map(() => <TourPlan />);
  return (
    <div>
      <HotelPlan />
      <div>{Tours}</div>
    </div>
  );
};

export default DayPlan;
