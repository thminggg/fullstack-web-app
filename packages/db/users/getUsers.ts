import postgresSQL from "../db";
import { SCHEMA } from "../const";
import { User } from "../@types/user";

// https://github.com/porsager/postgres/issues/590
export const getUsers = async (): Promise<User[]> => {
  const uuid = "172f5501-e4f0-448f-8d43-1490978f77c1";
  const users: User[] = await postgresSQL`
  select *
  from ${postgresSQL(SCHEMA)}.user
`;
  return users;
};
