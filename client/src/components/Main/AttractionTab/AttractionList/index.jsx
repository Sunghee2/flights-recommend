import React, { useEffect, useContext } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import GET_RECOMMAND from './query';
import { CityContext } from '../../../../stores';
import HotelItem from './HotelItem';

const AttractionList = ({ currentTab }) => {
  const { city } = useContext(CityContext);
  const [getRecommand, { called, loading, error, data }] = useLazyQuery(GET_RECOMMAND, {
    variables: { airport: city.airport },
  });

  useEffect(() => {
    if (city) {
      getRecommand();
    }
  }, [city]);

  if (called && loading) return <p>Loading ...</p>;
  //   if (error) return <p>error</p>;

  const hotels = [
    {
      name: '호텔이름1',
      price: 500,
      rate: 9.9,
      image: 'url1',
      _id: '1',
    },
    {
      name: '호텔이름2',
      price: 500,
      rate: 9.9,
      image: 'url2',
      _id: '2',
    },
    {
      name: '호텔이름3',
      price: 500,
      rate: 9.9,
      image: 'url3',
      _id: '3',
    },
    {
      name: '호텔이름4',
      price: 500,
      rate: 9.9,
      image: 'url4',
      _id: '4',
    },
  ].map(({ name, price, rate, image, _id }) => (
    <HotelItem key={_id} name={name} price={price} rate={rate} image={image} />
  ));
  return (
    <div>
      {currentTab === 'hotel' && hotels}
      {/* {currentTab === 'tour' && tours} */}
    </div>
  );
};

AttractionList.propTypes = {
  currentTab: PropTypes.string.isRequired,
};

export default AttractionList;
