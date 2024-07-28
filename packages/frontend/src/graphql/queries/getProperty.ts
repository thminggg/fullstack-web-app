import { gql } from "@apollo/client";

export const GET_PROPERTY = gql`
  query GetProperty($brokerId: String, $propertyId: String) {
    property(brokerId: $brokerId, propertyId: $propertyId) {
      data {
        property {
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
        broker {
          broker_id
          name
          phone
          broker_company_id
        }
        brokerCompany {
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
  }
`;
