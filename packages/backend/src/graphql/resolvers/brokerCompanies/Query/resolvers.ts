import { brokerCompanies } from "@thminggg/db";

export default {
  Query: {
    brokerCompany: async (
      _,
      { brokerCompanyId }: { brokerCompanyId: string }
    ) => await brokerCompanies.getBrokerCompany(brokerCompanyId),
  },
};
