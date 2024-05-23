import { gql } from "@apollo/client";

export const GET_PROPERTIES = gql`
  query GetProperties($pageSize: Int, $offset: Int) {
    properties(pageSize: $pageSize, offset: $offset) {
      data {
        property_id
        name
        address
        city
        province
        zip
        country
        listing_price
        num_of_bathroom
        num_of_bedroom
        num_of_view
        listed_timestamp
        size
        type
        overview
        broker_id
        tour_id
      }
      count
    }
  }
`;
