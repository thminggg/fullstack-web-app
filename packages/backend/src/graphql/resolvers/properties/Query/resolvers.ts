import { properties } from "@thminggg/db";

export default {
  Query: {
    properties: async (
      _,
      { pageSize, offset }: { pageSize: number; offset: number }
    ) => {
      const { data, count } = await properties.getProperties(pageSize, offset);
      return { data, count };
    },
  },
};
