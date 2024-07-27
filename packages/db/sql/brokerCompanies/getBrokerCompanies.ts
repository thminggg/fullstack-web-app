import { DBResult } from "../../@types";
import { BrokerCompany } from "../../@types/brokerCompany";
import knexSQL from "../../knex/knex";

/**
 * Retrieve all broker companies
 * @returns
 */
export const getBrokerCompanies = async (): Promise<
  Omit<DBResult<BrokerCompany[]>, "count">
> => {
  const table = "broker_company";
  const brokerCompanies: BrokerCompany[] = await knexSQL(table).select("*");
  return { data: brokerCompanies };
};
