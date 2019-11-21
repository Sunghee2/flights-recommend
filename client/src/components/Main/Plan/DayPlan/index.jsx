import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import HotelItem from './../../AttractionTab/AttractionList/HotelItem';
import TourItem from './../../AttractionTab/AttractionList/TourItem';
import { TotalContext, IterContext } from './../../../../stores';

const DayPlan = ({ index, hotel, tours }) => {
  const { currentHotel, currentTour } = useContext(TotalContext);
  const { setDays } = useContext(IterContext);
  const Tours = tours.map(({ _id, name, price, rank, image }) => (
    <TourItem key={_id} _id={_id} name={name} price={price} rank={rank} image={image} />
  ));
  console.log('DayPlan');
  const selectDay = useCallback(() => {
    console.log('select day');
    console.log(currentHotel);
    console.log(currentTour);
    setDays(prev => {
      if (Object.keys(currentHotel).length > 0) {
        return prev.map(day => {
          if (day.index === index) {
            return { ...day, hotel: currentHotel };
          }
          return day;
        });
      } else if (Object.keys(currentTour).length > 0) {
        return prev.map(day => {
          if (day.index === index) {
            const { tours } = day;
            if (tours.every(tour => tour._id !== currentTour._id)) {
              return { ...day, tours: [...tours, currentTour] };
            }
          }
          return day;
        });
      }
      return prev;
    });
  });
  return (
    <div onClick={selectDay}>
      <h2>Day {index}</h2>
      {Object.keys(hotel).length > 0 && (
        <HotelItem
          _id={hotel._id}
          name={hotel.name}
          price={hotel.price}
          rate={hotel.rate}
          image={hotel.image}
        />
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
