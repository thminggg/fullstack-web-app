import { gql } from "@apollo/client";

export const CREATE_BROKERS = gql`
  mutation CreateBrokers($brokerData: [BrokerInput]) {
    brokers(brokerData: $brokerData) {
      data
    }
  }
`;
