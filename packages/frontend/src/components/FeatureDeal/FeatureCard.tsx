import type { CustomFlowbiteTheme } from "flowbite-react";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { Property } from "../../../../db/@types";

const customTheme: CustomFlowbiteTheme["card"] = {
  img: {
    base: "md:w-auto md:h-auto md:aspect-square object-cover",
  },
};

export default function FeatureCard({
  property,
  image,
}: {
  property: Property;
  image: string;
}) {
  const navigate = useNavigate();
  return (
    <Card
      theme={customTheme}
      className="bg-white cursor-pointer z-10 md:flex-1"
      imgSrc={image}
      onClick={() =>
        navigate(`properties/${property.broker_id}/${property.property_id}`)
      }
    >
      <h5 className="text-xl font-bold tracking-tight text-gray-900">
        {property.name}, {property.city}
      </h5>
      <p className="font-normal text-gray-700">{property.address}</p>
    </Card>
  );
}
