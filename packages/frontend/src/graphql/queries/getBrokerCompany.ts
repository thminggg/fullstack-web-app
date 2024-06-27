import { gql } from "@apollo/client";

export const GET_BROKER_COMPANY = gql`
  query GetBrokerCompany($brokerCompanyId: String) {
    brokerCompany(brokerCompanyId: $brokerCompanyId) {
      data {
        broker_company_id
        name
        phone
        address
        city
        province
        zip
        country
      }
    }
  }
`;
