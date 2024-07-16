export default /* GraphQL */ `
  type User {
    user_id: String!
    email: String
    username: String
    access_right: String
    broker_id: String
  }

  type CreateUsersResult {
    data: [String]
  }

  input CreateUser {
    email: String
    username: String
  }

  input BeBroker {
    email: String
    phone: String
    brokerCompanyId: String
  }

  type Query {
    user(email: String): User
  }

  type Mutation {
    users(userData: [CreateUser]): CreateUsersResult
    beBroker(beBrokerData: BeBroker): String
  }
`;
