import React from "react";
import { Card } from "flowbite-react";

const CustomImg: React.FC<{ src: string }> = ({ src }) => {
  return <img className="rounded-t-lg" src={src} alt="building" />;
};

export default function ListingCard() {
  return (
    <Card
      className="grow bg-white cursor-pointer z-10"
      renderImage={() => <CustomImg src="townhouse/pic1.jpg" />}
    >
      <h5 className="text-xl font-bold tracking-tight text-gray-900">
        Vancouver Downtown - Bayview
      </h5>
      <p className="font-normal text-gray-700">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </Card>
  );
}
