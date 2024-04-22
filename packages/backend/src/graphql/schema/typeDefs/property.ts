export default /* GraphQL */ `
  type Property {
    property_id: String!
    name: String
    address: String
    city: String
    province: String
    zip: String
    country: String
    listing_price: Int
    num_of_bathroom: Int
    num_of_bedroom: Int
    num_of_view: Int
    listed_timestamp: Int
    size: Int
    type: String
    overview: String
    broker_id: String
    tour_id: String
  }

  type Query {
    properties: [Property]
  }
`;
