import { Broker, brokers } from "@thminggg/db";

export default {
  Mutation: {
    brokers: async (
      _,
      { brokerData }: { brokerData: Omit<Broker, "broker_id">[] }
    ) => {
      const brokerRecords = await brokers.createBrokers(brokerData);
      return {
        data: brokerRecords.map((broker) => broker["broker_id"]),
      };
    },
  },
};
