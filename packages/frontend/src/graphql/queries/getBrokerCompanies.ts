import { gql } from "@apollo/client";

export const GET_BROKER_COMPANIES = gql`
  query GetBrokerCompanies {
    brokerCompanies {
      data {
        broker_company_id
        name
      }
    }
  }
`;
