import { User } from "../../@types/user";
import knexSQL from "../../knex/knex";
import { getCount } from "../common/count";
import { DBResult } from "../../@types";

// https://github.com/porsager/postgres/issues/590
export const getUsers = async (): Promise<DBResult<User>> => {
  const table = "property";
  const query = knexSQL(table).select("*");
  const countQuery = knexSQL(table);

  const count = await getCount(countQuery);
  const proerties: User[] = await query.select("*");

  return { data: proerties, count };
};
