import {
  mergeResolvers,
} from 'merge-graphql-schemas';

import User from './user';

const resolvers = [User];

export default mergeResolvers(resolvers);
