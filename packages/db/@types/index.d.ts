export { default as users } from "../users";
export { default as properties } from "../sql/properties";
export * from "./user";
export * from "./property";
export type DBResult<T> = {
  data: T[];
  count: number;
};
