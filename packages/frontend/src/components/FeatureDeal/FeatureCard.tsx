import type { CustomFlowbiteTheme } from "flowbite-react";
import { Card } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["card"] = {
  img: {
    base: "md:w-auto md:h-auto md:aspect-square object-cover",
  },
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
      theme={customTheme}
      className="bg-white cursor-pointer z-10 md:flex-1"
      imgSrc={image}
    >
      <h5 className="text-xl font-bold tracking-tight text-gray-900">
        {title}
      </h5>
      <p className="font-normal text-gray-700">{description}</p>
    </Card>
  );
}
