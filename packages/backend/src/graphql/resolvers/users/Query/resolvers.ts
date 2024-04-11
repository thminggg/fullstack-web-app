import { users } from "@thminggg/db";

export default {
  Query: {
    users: async () => await users.getUsers(),
  },
};
