import { gql } from "@apollo/client";

export const CREATE_PROPERTIES = gql`
  mutation Properties($propertyData: [CreateProperty]) {
    properties(propertyData: $propertyData) {
      data
    }
  }
`;
