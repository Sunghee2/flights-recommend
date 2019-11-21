import React from 'react';
import AttractionList from './AttractionList';

const AttractionTab = _ => {
  return (
    <div>
      <div>탭</div>
      <AttractionList currentTab="hotel" />
    </div>
  );
};

export default AttractionTab;
