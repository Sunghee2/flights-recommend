import React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './apolloClient';

import Router from './routers';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
