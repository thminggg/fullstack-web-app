CREATE TABLE
  IF NOT EXISTS public.user (
    user_id UUID PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    username VARCHAR(255),
    access_right VARCHAR(255)
    -- FK
    broker_id UUID REFERENCES public.broker (broker_id)
  );

CREATE TABLE
  IF NOT EXISTS public.broker_company (
    broker_company_id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    address TEXT,
    city VARCHAR(255),
    province VARCHAR(255),
    zip VARCHAR(255),
    country VARCHAR(255)
  );

CREATE TABLE
  IF NOT EXISTS public.broker (
    broker_id UUID PRIMARY KEY,
    name VARCHAR(255),
    phone VARCHAR(255),
    -- FK
    broker_company_id UUID REFERENCES public.broker_company (broker_company_id)
  );

CREATE TABLE
  IF NOT EXISTS public.tour (
    tour_id UUID PRIMARY KEY,
    tour_time BIGINT NOT NULL,
    quota SMALLINT
  );

CREATE TABLE
  IF NOT EXISTS public.tour_booking (
    tour_booking_id UUID PRIMARY KEY,
    -- FK
    user_id UUID REFERENCES public.user (user_id),
    tour_id UUID REFERENCES public.tour (tour_id)
  );

CREATE TABLE
  IF NOT EXISTS public.property (
    property_id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    province VARCHAR(255) NOT NULL,
    zip VARCHAR(255),
    country VARCHAR(255),
    listing_price NUMERIC(12, 0),
    num_of_bathroom SMALLINT,
    num_of_bedroom SMALLINT,
    num_of_view SMALLINT,
    listed_timestamp BIGINT NOT NULL,
    size SMALLINT,
    type VARCHAR(255),
    overview TEXT,
    -- FK
    broker_id UUID REFERENCES public.broker (broker_id),
    tour_id UUID REFERENCES public.tour (tour_id)
  );
