export default `
  type User {
    _id: String!
    name: String!
    email: String!
    password: String!
  }
  type Query {
    users: [User!]!
  }
  type Mutation {
    createUser(user: CreateUserInput): User!
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
  }
`;
