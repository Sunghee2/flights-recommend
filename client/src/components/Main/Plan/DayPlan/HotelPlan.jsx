import React, { useContext, useCallback } from 'react';
import styles from 'styled-components';
import PropTypes from 'prop-types';
import { IterContext, TotalContext } from '../../../../stores';

const HotelPlan = ({ index, _id, name, price, rate, image }) => {
  const { setDays } = useContext(IterContext);
  const { currentHotel, currentTour } = useContext(TotalContext);
  const Thumbnail = styles.div`
        background-image: url(${image});
        color: white;
        background-repeat: no-repeat;
        background-size: contain;
    `;

  const deleteHotel = useCallback(() => {
    if (Object.keys(currentHotel).length === 0 && Object.keys(currentTour).length === 0) {
      console.log('현재 호텔 삭제');
      setDays(prev =>
        prev.map(day => {
          if (day.index === index) {
            return Object.assign(day, { hotel: {} });
          }
          return day;
        }),
      );
    }
  });

  return (
    <Thumbnail onClick={deleteHotel}>
      <div>{name}</div>
      <div>{price}</div>
      <div>{rate}</div>
    </Thumbnail>
  );
};

HotelPlan.propTypes = {
  index: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default HotelPlan;
