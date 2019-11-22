import React, { useState } from 'react';

const defaultCity = {
  cityList: [],
  city: {
    name: '',
    airport: '',
  },
};

export const CityContext = React.createContext(defaultCity);

export const CityStore = props => {
  const [cityList, setCityList] = useState(defaultCity.cityList);
  const [city, setCity] = useState(defaultCity.city);
  return (
    <CityContext.Provider value={{ cityList, setCityList, city, setCity }}>
      {props.children}
    </CityContext.Provider>
  );
};
