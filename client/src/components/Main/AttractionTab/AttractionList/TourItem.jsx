import React from 'react';
import styles from 'styled-components';
import PropTypes from 'prop-types';

const TourItem = ({ name, price, rank, image }) => {
  const Thumbnail = styles.div`
        background-image: url(${image});
        color: white;
        background-repeat: no-repeat;
        background-size: contain;
    `;

  return (
    <Thumbnail>
      <div>{name}</div>
      <div>{price}</div>
      <div>{rank}</div>
    </Thumbnail>
  );
};

TourItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default TourItem;
