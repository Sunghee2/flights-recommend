import ITER_FRAGMENT from './fragments';
const defaults = {
  Iter: {
    __typename: 'Iter',
    day: [
      {
        __typename: 'Day',
        index: 1,
        hotel: {
          __typename: 'Hotel',
        },
        tours: [
          {
            __typename: 'Tour',
          },
        ],
      },
    ],
  },
};

const typeDefs = [
  `
  schema {
    query: Query,
    mutation: Mutation,
  }

  type Query {
    Iter: Iter!
  }

  type Mutation {
    setIter(length: Int!): Iter!
    addHotel(_id: String!, startDay: Int!, endDay: Int!): Iter!
    addTour(_id: String!, day: Int!): Iter!
  }

  type Iter {
    day: [Day]!
  }
  
  type Day {
    index: Int!
    hotel: Hotel!
    tours: [Tour]!
  }
 
  type Hotel {
    name: String!
    price: Int!
    rate: Float!
    image: String!
    _id: String!
  }
 
  type Tour {
    name: String!
    price: Int!
    rank: Float!
    image: String!
    _id: String!
  }
`,
];
const resolvers = {
  Query: {
    Iter: (_, variables, { cache }) => {
      const id = cache.config.dataIdFromObject({ __typename: 'Iter' });
      return cache.readFragment({ frament: ITER_FRAGMENT, id });
    },
  },
  Mutation: {
    setIter: (_, { length }, { cache }) => {
      const day = new Array(length);

      const newIter = {
        __typename: 'Iter',
        day: day.map((v, index) => ({ index: index + 1, hotel: {}, tours: [] })),
      };

      cache.writeData({
        data: {
          Iter: newIter,
        },
      });
      return newEdit;
    },
  },
};

export default {
  defaults,
  typeDefs,
  resolvers,
};
