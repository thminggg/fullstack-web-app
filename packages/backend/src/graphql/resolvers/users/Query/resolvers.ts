import { users } from "@thminggg/db";

export default {
  Query: {
    user: async (_, { email }: { email: string }) => {
      const { data } = await users.getUsers({ emails: [email] });
      return data?.[0];
    },
  },
};
