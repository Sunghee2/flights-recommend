import React, { useContext, useCallback } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const TabBody = Styled.li`
`;

const TabItem = props => {
  console.log('TabItem');
  const changeTab = useCallback(() => {
    props.setCurrentTab(props.name);
  });

  return <TabBody onClick={changeTab}>{props.name}</TabBody>;
};

TabItem.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setCurrentTab: PropTypes.func.isRequired,
};

export default TabItem;
