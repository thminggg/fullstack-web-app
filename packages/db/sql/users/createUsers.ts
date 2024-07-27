import { CreateUserParams } from "../../@types/user";
import knexSQL from "../../knex/knex";
import { USER_DB_FIELDS } from "../common/const";

/**
 * SQL query to create users
 * @param {CreateUserParams} users
 * @returns
 */
export const createUsers = async (users: CreateUserParams) => {
  return knexSQL("user")
    .insert(
      users.map((user) => {
        return {
          user_id: knexSQL.fn.uuid(),
          ...user,
        };
      })
    )
    .returning([USER_DB_FIELDS.ID]);
};
