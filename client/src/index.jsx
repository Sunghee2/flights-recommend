import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import Router from './routers';

const App = () => {
  return (
    // <ApolloProvider client={client}>
    <Router />
    // </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
