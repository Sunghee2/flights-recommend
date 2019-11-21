import React from 'react';
import styles from 'styled-components';
import PropTypes from 'prop-types';

const HotelItem = ({ name, price, rate, image }) => {
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
      <div>{rate}</div>
    </Thumbnail>
  );
};

HotelItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default HotelItem;
