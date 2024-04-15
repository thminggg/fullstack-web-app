import { properties } from "@thminggg/db";

export default {
  Query: {
    properties: async () => await properties.getProperties(),
  },
};
