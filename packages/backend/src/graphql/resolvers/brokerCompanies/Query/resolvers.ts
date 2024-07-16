import { brokerCompanies } from "@thminggg/db";

export default {
  Query: {
    brokerCompanies: async () => await brokerCompanies.getBrokerCompanies(),
    brokerCompany: async (
      _,
      { brokerCompanyId }: { brokerCompanyId: string }
    ) => await brokerCompanies.getBrokerCompany(brokerCompanyId),
  },
};
