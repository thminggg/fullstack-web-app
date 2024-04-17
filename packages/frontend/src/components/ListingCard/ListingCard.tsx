import type { CustomFlowbiteTheme } from "flowbite-react";
import { Card } from "flowbite-react";
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
  title,
  description,
  city,
  image,
  listingPrice,
}: {
  title: string;
  description: string;
  city: string;
  image: string;
  listingPrice?: number;
}) {
  return (
    <Card theme={customTheme} horizontal imgSrc={image}>
      <div className="flex flex-col h-full justify-center gap-3">
        <p
          className={`${styles.listingPrice} text-2xl font-bold tracking-tighter`}
        >
          {listingPrice && formatCurrency(listingPrice)}
        </p>
        <h5 className="text-md font-semibold">{title}</h5>
        <p className="text-sm">
          {description} • {city}
        </p>
      </div>
    </Card>
  );
}
