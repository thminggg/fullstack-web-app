export default /* GraphQL */ `
  type BrokerCompany {
    broker_company_id: String
    name: String
    phone: String
    address: String
    city: String
    province: String
    zip: String
    country: String
  }

  type BrokerCompanyResult {
    data: BrokerCompany
  }

  type Query {
    brokerCompany(brokerCompanyId: String): BrokerCompanyResult
  }
`;
