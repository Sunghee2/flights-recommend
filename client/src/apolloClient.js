import ApolloClient from 'apollo-boost';
import clientState from './clientState';

const client = new ApolloClient({
  uri: 'http://localhost:3000',
  clientState,
});

export default client;
