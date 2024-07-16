export default /* GraphQL */ `
  type BrokerResult {
    data: Broker
  }

  type Query {
    broker(brokerId: String): BrokerResult
  }

  type CreateBrokersResult {
    data: [String]
  }

  type Mutation {
    brokers(brokerData: [BrokerInput]): CreateBrokersResult
  }
`;
