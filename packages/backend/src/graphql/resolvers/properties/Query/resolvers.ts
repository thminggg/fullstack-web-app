import { properties } from "@thminggg/db";

export default {
  Query: {
    properties: async (
      _,
      {
        pageSize,
        offset,
        filters,
      }: {
        pageSize: number;
        offset: number;
        filters: string[];
      }
    ) => {
      const { data, count } = await properties.getProperties(
        pageSize,
        offset,
        filters
      );
      return { data, count };
    },
  },
};
