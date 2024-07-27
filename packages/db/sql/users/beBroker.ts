import knexSQL from "../../knex/knex";
import { USER_DB_FIELDS } from "../common/const";

/**
 * Make a user to be a broker
 * @param {string} brokerId ID of the broker
 * @returns
 */
export const beBroker = async ({
  userId,
  brokerId,
}: {
  userId: string;
  brokerId: string;
}): Promise<Promise<{ user_id: string }[]>> => {
  const table = "user";
  return await knexSQL(table)
    .update({ [USER_DB_FIELDS.BROKER_ID]: brokerId })
    .where({ [USER_DB_FIELDS.ID]: userId })
    .returning(USER_DB_FIELDS.ID);
};
