import React, { useContext, useCallback } from 'react';
import styles from 'styled-components';
import PropTypes from 'prop-types';
import { IterContext, TotalContext } from '../../../../stores';

const TourPlan = ({ index, _id, name, price, rank, image }) => {
  const { setDays } = useContext(IterContext);
  const { currentHotel, currentTour } = useContext(TotalContext);
  const Thumbnail = styles.div`
        background-image: url(${image});
        color: white;
        background-repeat: no-repeat;
        background-size: contain;
    `;
  const deleteTour = useCallback(() => {
    if (Object.keys(currentHotel).length === 0 && Object.keys(currentTour).length === 0) {
      console.log('현재 투어 삭제');
      setDays(prev =>
        prev.map(day => {
          if (day.index === index) {
            const { tours } = day;
            return Object.assign(day, { tours: tours.filter(tour => tour._id !== _id) });
          }
          return day;
        }),
      );
    }
  });

  return (
    <Thumbnail onClick={deleteTour}>
      <div>{name}</div>
      <div>{price}</div>
      <div>{rank}</div>
    </Thumbnail>
  );
};

TourPlan.propTypes = {
  index: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default TourPlan;
