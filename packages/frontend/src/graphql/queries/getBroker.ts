import { gql } from "@apollo/client";

export const GET_BROKER = gql`
  query GetBroker($brokerId: String) {
    broker(brokerId: $brokerId) {
      data {
        broker_id
        name
        phone
        broker_company_id
      }
    }
  }
`;
