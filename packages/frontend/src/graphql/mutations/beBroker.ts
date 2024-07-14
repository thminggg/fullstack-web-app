import { gql } from "@apollo/client";

export const BE_BROKER = gql`
  mutation Mutation($beBrokerData: BeBroker) {
    beBroker(beBrokerData: $beBrokerData)
  }
`;
