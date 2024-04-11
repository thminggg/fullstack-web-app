export default /* GraphQL */ `
  type User {
    user_id: String!
    email: String!
    username: String
    phone: String
    access_right: String
  }

  type Query {
    users: [User]
  }
`;
