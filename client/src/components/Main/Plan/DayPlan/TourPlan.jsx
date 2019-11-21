import React, { useContext, useCallback } from 'react';
import styles from 'styled-components';
import PropTypes from 'prop-types';
import { TotalContext } from '../../../../stores';

const TourPlan = ({ _id, name, price, rank, image }) => {
  const Thumbnail = styles.div`
        background-image: url(${image});
        color: white;
        background-repeat: no-repeat;
        background-size: contain;
    `;
  const deleteTour = useCallback(() => {
    console.log('현재 투어 삭제');
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
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default TourPlan;
