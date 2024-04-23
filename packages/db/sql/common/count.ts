import { SCHEMA } from "../../const";
import postgresSQL from "../../db";
import postgres from "postgres";

/**
 * Get the total count of a SQL query
 * @param {postgres.PendingQuery<postgres.Row[]>} table Table of the original query
 * @returns {number} Number of records
 */
export const getCount = async (
  table: postgres.PendingQuery<postgres.Row[]>
) => {
  const [count] = await postgresSQL`
    select count(*)
    from ${table}
  `;

  return parseInt(count?.count);
};
