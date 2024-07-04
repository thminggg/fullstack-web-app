export default /* GraphQL */ `
  type BrokerCompanyResult {
    data: BrokerCompany
  }

  type Query {
    brokerCompany(brokerCompanyId: String): BrokerCompanyResult
  }
`;
