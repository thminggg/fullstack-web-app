export { default as properties } from "../sql/properties";
export { default as users } from "../sql/users";
export * from "./property";
export * from "./user";
export type DBResult<T> = {
  data: T[];
  count: number;
};
