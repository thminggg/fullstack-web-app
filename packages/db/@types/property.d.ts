export type Property = {
  property_id: string;
  name: string;
  address: string;
  city: string;
  province: string;
  zip?: string;
  country?: string;
  listing_price?: number;
  num_of_bathroom?: string;
  num_of_bedroom?: string;
  num_of_view?: string;
  listed_timestamp: number;
  size: string;
  type: string;
  overview?: string;
  broker_id?: string;
  tour_id?: string;
};
