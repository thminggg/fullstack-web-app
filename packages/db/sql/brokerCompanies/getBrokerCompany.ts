import { DBResult } from "../../@types";
import { BrokerCompany } from "../../@types/brokerCompany";
import knexSQL from "../../knex/knex";
import { BROKER_COMPANY_DB_FIELDS } from "../common/const";

/**
 * Retrieve a broker company by broker_company_id
 * @param {string} brokerCompanyId ID of the broker company
 * @returns
 */
export const getBrokerCompany = async (
  brokerCompanyId: string
): Promise<Omit<DBResult<BrokerCompany>, "count">> => {
  const table = "broker_company";
  const brokerCompany: BrokerCompany = await knexSQL(table)
    .first("*")
    .where({ [BROKER_COMPANY_DB_FIELDS.ID]: brokerCompanyId });

  return { data: brokerCompany };
};
