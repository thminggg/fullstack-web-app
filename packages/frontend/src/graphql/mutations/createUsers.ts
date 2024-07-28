import { callApollo } from "../../utils/request";

export const CREATE_USERS = `
  mutation CreateUsers($userData: [CreateUser]) {
    users(userData: $userData) {
      data
    }
  }
`;

export const createUsers = async (
  users: {
    email: string;
    username?: string;
  }[]
) => {
  return await callApollo({
    query: CREATE_USERS,
    variables: { userData: users },
  });
};
