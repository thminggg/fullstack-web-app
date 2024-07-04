export default /* GraphQL */ `
  type PropertiesResult {
    data: [Property]
    count: Int!
  }

  type PropertyResult {
    data: UnitResult
  }

  type Query {
    properties(
      pageSize: Int
      offset: Int
      filters: [String]
      orderBys: [String]
      searchQuery: String
    ): PropertiesResult

    property(brokerId: String, propertyId: String): PropertyResult
  }

  type CreatePropertiesResult {
    data: [String]
  }

  type Mutation {
    properties(propertyData: [CreateProperty]): CreatePropertiesResult
  }
`;
