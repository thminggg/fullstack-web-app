import { properties } from "@thminggg/db";

export default {
  Query: {
    properties: async (
      _,
      {
        pageSize,
        offset,
        filters,
        orderBys,
        searchQuery,
      }: {
        pageSize: number;
        offset: number;
        filters: string[];
        orderBys: string[];
        searchQuery: string;
      }
    ) => {
      const { data, count } = await properties.getProperties(
        pageSize,
        offset,
        filters,
        orderBys,
        searchQuery
      );
      return { data, count };
    },
    property: async (
      _,
      {
        brokerId,
        propertyId,
      }: {
        brokerId: string;
        propertyId: string;
      }
    ) => {
      const { data } = await properties.getProperty(brokerId, propertyId);
      return { data };
    },
  },
};
