CREATE EXTENSION dblink;

DO
$do$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'real_estate_db') THEN
      PERFORM dblink_exec('dbname=' || current_database(), 'CREATE DATABASE real_estate_db');
   END IF;
END
$do$;

CREATE TABLE IF NOT EXISTS user (
  user_id UUID PRIMARY KEY,
  email VARCHAR NOT NULL,
  username VARCHAR,
  phone VARCHAR,
  access_right VARCHAR,
);

CREATE TABLE IF NOT EXISTS broker_company (
  broker_company_id	UUID PRIMARY KEY,
  name	VARCHAR NOT NULL,
  phone	VARCHAR NOT NULL,
  address	TEXT,
  city	VARCHAR,
  province VARCHAR,
  zip	VARCHAR,
  country	VARCHAR,
);

CREATE TABLE IF NOT EXISTS broker (
  broker_id	UUID PRIMARY KEY,
  name VARCHAR,
  phone	VARCHAR,
  -- FK
  broker_company_id	UUID REFERENCES broker_company(broker_company_id),
);

CREATE TABLE IF NOT EXISTS tour (
  tour_id UUID PRIMARY KEY,
  tour_time TIMESTAMP NOT NULL,
  quota SMALLINT,
);

CREATE TABLE IF NOT EXISTS tour_booking (
  tour_booking_id UUID PRIMARY KEY,
  -- FK
  user_id UUID REFERENCES user(user_id),
  tour_id UUID REFERENCES tour(tour_id),
);

CREATE TABLE IF NOT EXISTS property (
  property_id UUID PRIMARY KEY,
  name VARCHAR NOT NULL,
  address VARCHAR NOT NULL,
  city VARCHAR NOT NULL,
  province VARCHAR NOT NULL,
  zip	VARCHAR,
  country	VARCHAR,
  listing_price	NUMERIC(12,6),
  num_of_bathroom	SMALLINT,
  num_of_bedroom SMALLINT,
  num_of_view	SMALLINT,
  listed_timestamp TIMESTAMP NOT NULL,,
  size SMALLINT,
  type VARCHAR,
  overview TEXT,
  -- FK
  broker_id UUID REFERENCES broker(broker_id),
  tour_id UUID REFERENCES tour(tour_id),
);
