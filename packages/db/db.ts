import postgres from "postgres";

const postgresSQL = postgres({
  // Following options override connection string
  host: "localhost", // Postgres ip address[s] or domain name[s]
  port: 5432, // Postgres server port[s]
  database: "real_estate_db", // Name of database to connect to
  username: "postgres", // Username of database user
  password: "123123", // Password of database user
});

export default postgresSQL;
