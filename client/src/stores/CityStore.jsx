import React, { useState } from 'react';

const defaultCity = {
  cityList: [
    {
      name: '인천',
      airport: 'INC',
    },
    {
      name: '바르셀로나',
      airport: 'BC',
    },
    {
      name: '파리',
      airport: 'PAR',
    },
    {
      name: '뉴욕',
      airport: 'NY',
    },
  ],
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
