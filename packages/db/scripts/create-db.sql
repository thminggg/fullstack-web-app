CREATE EXTENSION dblink;

DO
$do$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'real_estate_db') THEN
      PERFORM dblink_exec('dbname=' || current_database(), 'CREATE DATABASE real_estate_db');
   END IF;
END
$do$;
