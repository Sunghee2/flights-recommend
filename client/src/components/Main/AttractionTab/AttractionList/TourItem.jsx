import React, { useContext, useCallback } from 'react';
import styles from 'styled-components';
import PropTypes from 'prop-types';
import { TotalContext } from './../../../../stores';

const TourItem = ({ _id, name, price, rank, image }) => {
  const { setTour } = useContext(TotalContext);
  const Thumbnail = styles.div`
        background-image: url(${image});
        color: white;
        background-repeat: no-repeat;
        background-size: contain;
    `;
  const selectTour = useCallback(() => {
    setTour({ _id, name, price, rate, image });
  });

  return (
    <Thumbnail onClick={selectTour}>
      <div>{name}</div>
      <div>{price}</div>
      <div>{rank}</div>
    </Thumbnail>
  );
};

TourItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default TourItem;
