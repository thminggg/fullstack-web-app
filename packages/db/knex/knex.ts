import knex from "knex";
import knexConfig from "../knexfile";

const environment = process.env.ENVIRONMENT || "development";
const config = knexConfig[environment];
export default knex(config);
