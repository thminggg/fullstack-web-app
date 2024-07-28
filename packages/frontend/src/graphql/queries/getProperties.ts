import { gql } from "@apollo/client";

export const GET_PROPERTIES = gql`
  query GetProperties(
    $pageSize: Int
    $offset: Int
    $filters: [String]
    $orderBys: [String]
    $searchQuery: String
  ) {
    properties(
      pageSize: $pageSize
      offset: $offset
      filters: $filters
      orderBys: $orderBys
      searchQuery: $searchQuery
    ) {
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
