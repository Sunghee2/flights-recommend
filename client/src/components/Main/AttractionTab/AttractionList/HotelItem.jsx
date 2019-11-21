import React, { useContext, useCallback } from 'react';
import styles from 'styled-components';
import PropTypes from 'prop-types';
import { TotalContext } from './../../../../stores';

const Container = styles.div`
  background: rgba(255,255,255,0.5);
  border-radius: .8em;
  display: flex;
  justifyContent: between-space;
  padding: 1em;
  margin-bottom: 1em;
  cursor: pointer;
`;
const Info = styles.div`
`;

const Name = styles.div`
  font-size: 1.2em;
`;
const Price = styles.div`
  font-size: 1.1em;
  margin: 0.4em 0;
  color: #fe5d41;
`;
const Rate = styles.div`
  color: #666;
`;

const Star = styles.span`
color: #fe5d41;
`;

const Thumbnail = styles.img`
  margin-left: auto;
  height: 4.1em;
`;

const HotelItem = ({ _id, name, price, rate, image }) => {
  const { setHotel } = useContext(TotalContext);

  const selectHotel = useCallback(() => {
    console.log('현재 호텔 변경');
    setHotel({ _id, name, price, rate, image });
  });

  return (
    <Container onClick={selectHotel}>
      <Info>
        <Name>{name}</Name>
        <Price>\{price}</Price>
        <Rate>
          <Star>★</Star>
          {rate}
        </Rate>
      </Info>
      <Thumbnail src={image} alt={name} />
    </Container>
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
