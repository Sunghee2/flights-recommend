import React, { useState } from 'react';

const defaultTotal = {
  currentHotel: {},
  currentTour: {},
};

export const TotalContext = React.createContext(defaultTotal);

export const TotalStore = props => {
  const [currentHotel, setHotel] = useState(defaultTotal.currentHotel);
  const [currentTour, setTour] = useState(defaultTotal.currentTour);
  return (
    <TotalContext.Provider value={{ currentHotel, setHotel, currentTour, setTour }}>
      {props.children}
    </TotalContext.Provider>
  );
};
