import React, { useState } from 'react';

const defaultIter = {
  days: [],
};

export const IterContext = React.createContext(defaultIter);

export const IterStore = props => {
  const [days, setDays] = useState(defaultIter.days);
  return <IterContext.Provider value={{ days, setDays }}>{props.children}</IterContext.Provider>;
};
