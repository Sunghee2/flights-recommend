import User from '../../../models/sample';

export default {
  Query: {
    users: async () => {
      const users = await User.find({});

      return users.map((u) => ({
        _id: u._id.toString(),
        name: u.name,
        email: u.email,
      }));
    },
  },
  Mutation: {
    createUser: async (_, {
      user,
    }) => {
      const newUser = await User.create({
        name: user.name,
        email: user.email,
        password: user.password,
      });
      return newUser;
    },
  },
};
