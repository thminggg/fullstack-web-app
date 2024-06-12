import { DBResult } from "../../@types";
import { Property } from "../../@types/property";
import knexSQL from "../../knex/knex";
import { getCount } from "../common/count";

/**
 * SQL query to retrieve all properties
 * @param {number} pageSize
 * @param {number} offset
 * @param {string[]} filters
 * @returns
 */
export const getProperties = async (
  pageSize: number = 20,
  offset: number = 0,
  filters?: string[]
): Promise<DBResult<Property>> => {
  const table = "property";
  const query = knexSQL(table).select("*");
  const countQuery = knexSQL(table);

  // Apply filters
  filters?.forEach((filter) => {
    query.andWhere(knexSQL.raw(filter));
    countQuery.andWhere(knexSQL.raw(filter));
  });

  // Apply limit and offset
  query.limit(pageSize);
  query.offset(offset);

  const count = await getCount(countQuery);
  const proerties: Property[] = await query.select("*");

  return { data: proerties, count };
};
