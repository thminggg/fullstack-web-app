export default /* GraphQL */ `
  type BrokerCompaniesResult {
    data: [BrokerCompany]
  }

  type BrokerCompanyResult {
    data: BrokerCompany
  }

  type Query {
    brokerCompanies: BrokerCompaniesResult
    brokerCompany(brokerCompanyId: String): BrokerCompanyResult
  }
`;
