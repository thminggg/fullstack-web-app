import { Property } from "@thminggg/db";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/number";
import styles from "./ListingCard.module.css";

const customTheme: CustomFlowbiteTheme["card"] = {
  root: {
    horizontal: {
      off: "flex-col",
      on: "flex-col w-full md:flex-row",
    },
  },
  img: {
    horizontal: {
      on: "max-h-60 w-full rounded-t-lg object-cover md:h-auto md:w-6/12 md:rounded-none md:rounded-l-lg",
    },
  },
};

export default function ListingCard({
  property,
  image,
}: {
  property: Property;
  image: string;
}) {
  const navigate = useNavigate();
  const {
    property_id,
    name,
    address,
    city,
    province,
    listing_price,
    num_of_bathroom,
    num_of_bedroom,
    size,
    broker_id,
  } = property;
  return (
    <Card
      theme={customTheme}
      horizontal
      imgSrc={image}
      className="cursor-pointer"
      onClick={() => navigate(`/properties/${broker_id}/${property_id}`)}
    >
      <div className="flex flex-col h-full justify-center gap-3">
        <p className={`${styles.listing_price} text-2xl font-bold`}>
          {listing_price && formatCurrency(listing_price)}
        </p>
        <h5 className="text-md font-semibold">{name}</h5>
        <p className="text-md">
          {address} • {city} • {province}
        </p>
        <p className="text-md">
          {num_of_bedroom} bed • {num_of_bathroom} bath • {size} sqft
        </p>
      </div>
    </Card>
  );
}
