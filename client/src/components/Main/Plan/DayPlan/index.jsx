import React from 'react';
import PropTypes from 'prop-types';
import HotelItem from './../../AttractionTab/AttractionList/HotelItem';
import TourItem from './../../AttractionTab/AttractionList/TourItem';

const DayPlan = ({ index, hotel, tours }) => {
  const Tours = tours.map(({ _id, name, price, rank, image }) => (
    <TourItem key={_id} name={name} price={price} rank={rank} image={image} />
  ));
  return (
    <div>
      {hotel && (
        <HotelItem name={hotel.name} price={hotel.price} rate={hotel.rate} image={hotel.image} />
      )}
      <div>{Tours}</div>
    </div>
  );
};

DayPlan.propTypes = {
  index: PropTypes.number.isRequired,
  hotel: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    rate: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
  tours: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      rank: PropTypes.number,
      image: PropTypes.string,
    }),
  ).isRequired,
};

export default DayPlan;
