import { Property } from "../../@types/property";
import knexSQL from "../../knex/knex";

/**
 * SQL query to create properties
 * @param {Array<Omit<Property, "property_id" | "tour_id">>} properties
 * @returns
 */
export const createProperties = async (
  properties: Array<Omit<Property, "property_id" | "tour_id">>
) => {
  return await knexSQL("property")
    .insert(
      properties.map((property) => {
        return {
          property_id: knexSQL.fn.uuid(),
          ...property,
        };
      })
    )
    .returning(["property_id"]);
};
