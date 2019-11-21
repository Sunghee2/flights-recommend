import * as React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';

const Plan = ({ history }) => {
  return (
    <div>
      <a onClick={history.goBack}>Previous Page</a>
      <Link to="/">Home</Link>
      <Title label="Plan" />
    </div>
  );
};

export default Plan;
