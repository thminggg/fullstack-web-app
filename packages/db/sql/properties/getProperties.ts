import { DBResult } from "../../@types";
import { Property } from "../../@types/property";
import knexSQL from "../../knex/knex";
import { getCount } from "../common/count";
import { tokenizeSearch } from "../common/tokenizeSearch";

/**
 * SQL query to retrieve all properties
 * @param {number} pageSize
 * @param {number} offset
 * @param {string[]} filters
 * @param {string[]} orderBys
 * @param {string} searchQuery
 * @returns
 */
export const getProperties = async ({
  pageSize = 20,
  offset = 0,
  filters,
  orderBys,
  searchQuery,
}: {
  pageSize: number;
  offset: number;
  filters?: string[];
  orderBys?: string[];
  searchQuery?: string;
}): Promise<DBResult<Property[]>> => {
  const table = "property";
  const query = knexSQL(table).select("*");
  const countQuery = knexSQL(table);

  // Apply filters
  filters?.forEach((filter) => {
    if (filter) {
      query.andWhere(knexSQL.raw(filter));
      countQuery.andWhere(knexSQL.raw(filter));
    }
  });

  // Apply substring comparison
  if (searchQuery) {
    const tokenizedQuery = tokenizeSearch({ searchStr: searchQuery });
    query.andWhereRaw(tokenizedQuery);
    countQuery.andWhereRaw(tokenizedQuery);
  }

  // Apply order by
  orderBys?.forEach((orderBy) => {
    if (orderBy) query.orderByRaw(orderBy);
  });

  // Apply limit and offset
  query.limit(pageSize);
  query.offset(offset);

  const count = await getCount(countQuery);
  const proerties: Property[] = await query.select("*");

  return { data: proerties, count };
};
