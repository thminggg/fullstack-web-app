import postgresSQL from "../db";
import { SCHEMA } from "../const";
import { User } from "../@types/user";

// https://github.com/porsager/postgres/issues/590
export const getUsers = async (): Promise<User[]> => {
  const users: User[] = await postgresSQL`
    select *
    from ${postgresSQL(SCHEMA)}.user
  `;
  return users;
};
