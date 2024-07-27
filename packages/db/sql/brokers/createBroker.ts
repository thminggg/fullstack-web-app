import { Broker } from "../../@types/broker";
import knexSQL from "../../knex/knex";
import { BROKER_DB_FIELDS } from "../common/const";

/**
 * Create brokers
 * @param {Broker[]} brokers
 * @returns
 */
export const createBrokers = async (
  brokers: Omit<Broker, "broker_id">[]
): Promise<{ broker_id: string }[]> => {
  const table = "broker";
  return await knexSQL(table)
    .insert(
      brokers.map((broker) => {
        return {
          broker_id: knexSQL.fn.uuid(),
          ...broker,
        };
      })
    )
    .returning(BROKER_DB_FIELDS.ID);
};
