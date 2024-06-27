import { properties } from "@thminggg/db";
import { brokers, brokerCompanies } from "@thminggg/db";

export default {
  Query: {
    properties: async (
      _,
      {
        pageSize,
        offset,
        filters,
        orderBys,
        searchQuery,
      }: {
        pageSize: number;
        offset: number;
        filters: string[];
        orderBys: string[];
        searchQuery: string;
      }
    ) => {
      const { data, count } = await properties.getProperties(
        pageSize,
        offset,
        filters,
        orderBys,
        searchQuery
      );
      return { data, count };
    },
    property: async (
      _,
      {
        brokerId,
        propertyId,
      }: {
        brokerId: string;
        propertyId: string;
      }
    ) => {
      const { data: propertyData } = await properties.getProperty(
        brokerId,
        propertyId
      );
      const { data: brokerData } = await brokers.getBroker(
        propertyData.broker_id
      );
      const { data: brokerCompanyData } =
        await brokerCompanies.getBrokerCompany(brokerData.broker_company_id);
      return {
        data: {
          property: propertyData,
          broker: brokerData,
          brokerCompany: brokerCompanyData,
        },
      };
    },
  },
};
