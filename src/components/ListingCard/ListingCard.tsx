import type { CustomFlowbiteTheme } from "flowbite-react";
import { Card } from "flowbite-react";

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
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <Card theme={customTheme} horizontal imgSrc={image}>
      <h5 className="text-xl font-bold tracking-tight text-gray-900">
        {title}
      </h5>
      <p className="font-normal text-gray-700">{description}</p>
    </Card>
  );
}
