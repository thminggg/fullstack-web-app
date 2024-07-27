import { DBResult } from "../../@types";
import { Property } from "../../@types/property";
import knexSQL from "../../knex/knex";
import { PROPERTY_DB_FIELDS } from "../common/const";

/**
 * SQL query to retrieve a property by broker ID and property ID
 * @param {string} brokerId
 * @param {string} propertyId
 * @returns
 */
export const getProperty = async (
  brokerId: string,
  propertyId: string
): Promise<Omit<DBResult<Property>, "count">> => {
  const property: Property = await knexSQL("property")
    .first("*")
    .where({
      [PROPERTY_DB_FIELDS.BROKER]: brokerId,
      [PROPERTY_DB_FIELDS.ID]: propertyId,
    });

  return { data: property };
};
