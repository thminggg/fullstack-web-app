import { DBResult } from "../../@types";
import { Broker } from "../../@types/broker";
import knexSQL from "../../knex/knex";
import { BROKER_DB_FIELDS } from "../common/const";

/**
 * Retrieve a broker by broker_id
 * @param {string} brokerId ID of the broker
 * @returns
 */
export const getBroker = async (
  brokerId: string
): Promise<Omit<DBResult<Broker>, "count">> => {
  const table = "broker";
  const broker: Broker = await knexSQL(table)
    .first("*")
    .where({ [BROKER_DB_FIELDS.ID]: brokerId });

  return { data: broker };
};
