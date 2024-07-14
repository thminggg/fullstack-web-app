import { Property, properties } from "@thminggg/db";

export default {
  Mutation: {
    properties: async (
      _,
      {
        propertyData,
      }: { propertyData: Array<Omit<Property, "property_id" | "tour_id">> }
    ) => {
      const propertyRecords = await properties.createProperties(propertyData);
      return {
        data: propertyRecords.map((property) => property["property_id"]),
      };
    },
  },
};
