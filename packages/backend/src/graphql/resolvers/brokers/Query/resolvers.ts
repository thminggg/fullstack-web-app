import { brokers } from "@thminggg/db";

export default {
  Query: {
    broker: async (_, { brokerId }: { brokerId: string }) =>
      await brokers.getBroker(brokerId),
  },
};
