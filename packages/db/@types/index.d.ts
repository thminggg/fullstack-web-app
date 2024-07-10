export { default as brokerCompanies } from "../sql/brokerCompanies";
export { default as brokers } from "../sql/brokers";
export { default as properties } from "../sql/properties";
export { default as users } from "../sql/users";
export * from "./broker";
export * from "./brokerCompany";
export * from "./property";
export * from "./user";
export type DBResult<T> = {
  data: T;
  count: number;
};
