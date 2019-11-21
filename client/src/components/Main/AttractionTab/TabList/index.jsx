import React, { useContext } from 'react';
import Styled from 'styled-components';
import TabItem from './TabItem';
import PropTypes from 'prop-types';

const ListBody = Styled.ul`
`;

const tabList = ['hotel', 'tour'];

const TabList = props => {
  console.log('TabList');
  console.log(props.currentTab);
  return (
    <ListBody>
      {tabList.map((tab, index) => {
        const active = tab === props.currentTab;

        return (
          <TabItem key={index} name={tab} active={active} setCurrentTab={props.setCurrentTab} />
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
