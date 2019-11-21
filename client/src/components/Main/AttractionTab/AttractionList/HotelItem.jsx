import React, { useContext, useCallback } from 'react';
import styles from 'styled-components';
import PropTypes from 'prop-types';
import { TotalContext } from './../../../../stores';

const HotelItem = ({ _id, name, price, rate, image }) => {
  const { setHotel } = useContext(TotalContext);
  const Thumbnail = styles.div`
        background-image: url(${image});
        color: white;
        background-repeat: no-repeat;
        background-size: contain;
    `;

  const selectHotel = useCallback(() => {
    setHotel({ _id, name, price, rate, image });
  });

  return (
    <Thumbnail onClick={selectHotel}>
      <div>{name}</div>
      <div>{price}</div>
      <div>{rate}</div>
    </Thumbnail>
  );
};

HotelItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default HotelItem;
