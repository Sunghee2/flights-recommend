import * as React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';

const Page1 = ({ history }) => {
  return (
    <div>
      <a onClick={history.goBack}>Previous Page</a>
      <Link to="/">Home</Link>
      <Link to="/page2">Page 2</Link>
      <Title label="Page 1" />
    </div>
  );
};

export default Page1;
