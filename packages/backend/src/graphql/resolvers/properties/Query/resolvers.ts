import { properties } from "@thminggg/db";

export default {
  Query: {
    properties: async () => {
      const { data, count } = await properties.getProperties();
      return { data, count };
    },
  },
};
