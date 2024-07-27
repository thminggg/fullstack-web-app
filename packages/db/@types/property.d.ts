export type Property = {
  property_id: string;
  name: string;
  address: string;
  city: string;
  province: string;
  zip?: string;
  country?: string;
  listing_price?: number;
  num_of_bathroom?: number;
  num_of_bedroom?: number;
  num_of_view?: number;
  listed_timestamp: number;
  size: number;
  type: string;
  overview?: string;
  broker_id?: string;
  tour_id?: string;
};
