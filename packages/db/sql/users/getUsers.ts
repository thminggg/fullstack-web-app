import { DBResult } from "../../@types";
import { User } from "../../@types/user";
import knexSQL from "../../knex/knex";
import { USER_DB_FIELDS } from "../common/const";

/**
 * SQL query to retrieve users by emails
 * @param {string[]} emails
 * @returns
 */
export const getUsers = async ({
  emails = [],
  usernames = [],
}: {
  emails?: string[];
  usernames?: string[];
}): Promise<Omit<DBResult<User[]>, "count">> => {
  const users: User[] = await knexSQL("user")
    .select("*")
    .whereIn(USER_DB_FIELDS.EMAIL, emails)
    .orWhereIn(USER_DB_FIELDS.USERNAME, usernames);

  return { data: users };
};
