import React, { useContext } from 'react';
import Styled from 'styled-components';
import TabItem from './TabItem';
import PropTypes from 'prop-types';
import { TotalContext } from './../../../../stores';

const ListBody = Styled.ul`
`;

const tabList = ['hotel', 'tour'];

const TabList = props => {
  const { setHotel, setTour } = useContext(TotalContext);
  console.log('TabList');
  console.log(props.currentTab);
  return (
    <ListBody>
      {tabList.map((tab, index) => {
        const active = tab === props.currentTab;
        const setTotal = tab === 'hotel' ? setHotel : setTour;
        return (
          <TabItem
            key={index}
            name={tab}
            active={active}
            setCurrentTab={props.setCurrentTab}
            setTotal={setTotal}
          />
        );
      })}
    </ListBody>
  );
};

TabList.propTypes = {
  currentTab: PropTypes.string.isRequired,
  setCurrentTab: PropTypes.func.isRequired,
};

export default TabList;
