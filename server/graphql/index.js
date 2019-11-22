import {
  makeExecutableSchema,
} from 'graphql-tools';
import {
  mergeResolvers,
  mergeTypes,
} from 'merge-graphql-schemas';

import TicketType from './ticket/type';
import PlanType from './plan/type';
import RecommendType from './recommend/type';
import TicketResolver from './ticket/resolver';
import PlanResolver from './plan/resolver';
import RecommendResolver from './recommend/resolver';

const types = [TicketType, PlanType, RecommendType];
const resolvers = [TicketResolver, PlanResolver, RecommendResolver];

const schema = makeExecutableSchema({
  typeDefs: mergeTypes(types),
  resolvers: mergeResolvers(resolvers),
});

export default schema;
