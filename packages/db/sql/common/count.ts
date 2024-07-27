import { Knex } from "knex";

/**
 * Get the total count of a SQL query
 * @param {Knex.QueryBuilder} table Table of the original query
 * @returns {number} Number of records
 */
export const getCount = async (query: Knex.QueryBuilder) => {
  const [{ count }] = await query.count("*");

  return Number(count);
};
