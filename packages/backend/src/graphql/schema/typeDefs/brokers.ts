export default /* GraphQL */ `
  type Broker {
    broker_id: String!
    name: String
    phone: String
    broker_company_id: String
  }

  type BrokerResult {
    data: Broker
  }

  type Query {
    broker(brokerId: String): BrokerResult
  }
`;
