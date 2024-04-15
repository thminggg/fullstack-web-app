import { Property } from "../@types/property";
import { SCHEMA } from "../const";
import postgresSQL from "../db";

/**
 * SQL query to retrieve all properties
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
 * @param constraints
 * @returns
 */
export const getProperties = async (): Promise<Property[]> => {
  const proerties: Property[] = await postgresSQL`
    select *
    from ${postgresSQL(SCHEMA)}.property
    `;
  return proerties;
};
