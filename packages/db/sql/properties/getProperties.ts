import { Property } from "../../@types/property";
import { SCHEMA } from "../../const";
import postgresSQL from "../../db";
import { DBResult } from "../../@types";
import { getCount } from "../common/count";

/**
 * SQL query to retrieve all properties
 * @param {number} pageSize
 * @param {number} offset
 * @example
 * `
 *   select *
 *   from ${postgresSQL(SCHEMA)}.property
 *   ${
 *     constraints
 *       ? postgresSQL`where ${postgresSQL(col)} = ${value}`
 *       : postgresSQL``
 *   }
 * `
 * @returns
 */
export const getProperties = async (
  pageSize: number = 20,
  offset: number = 0
): Promise<any> => {
  const table = postgresSQL`${postgresSQL(SCHEMA)}.property`;

  const proerties: Property[] = await postgresSQL`
    select *
    from ${table}
    limit ${pageSize}
    offset ${offset};
    `;

  const count = await getCount(table);

  return { data: proerties, count };
};
