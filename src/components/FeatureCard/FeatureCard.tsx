import React from "react";
import { Card } from "flowbite-react";

const CustomImg: React.FC<{ src: string }> = ({ src }) => {
  return <img className="rounded-t-lg" src={src} alt="building" />;
};

export default function FeatureCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <Card
      className="grow bg-white cursor-pointer z-10"
      renderImage={() => <CustomImg src={image} />}
    >
      <h5 className="text-xl font-bold tracking-tight text-gray-900">
        {title}
      </h5>
      <p className="font-normal text-gray-700">{description}</p>
    </Card>
  );
}
