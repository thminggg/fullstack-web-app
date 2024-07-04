export default /* GraphQL */ `
  type BrokerResult {
    data: Broker
  }

  type Query {
    broker(brokerId: String): BrokerResult
  }
`;
