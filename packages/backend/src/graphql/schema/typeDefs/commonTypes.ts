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

  input CreateProperty {
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
  }

  type Broker {
    broker_id: String!
    name: String
    phone: String
    broker_company_id: String
  }

  type BrokerCompany {
    broker_company_id: String
    name: String
    phone: String
    address: String
    city: String
    province: String
    zip: String
    country: String
  }

  type UnitResult {
    property: Property
    broker: Broker
    brokerCompany: BrokerCompany
  }
`;
