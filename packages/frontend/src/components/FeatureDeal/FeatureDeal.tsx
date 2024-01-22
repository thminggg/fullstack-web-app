import { useEffect, useState } from "react";
import { randomAddress, fetchAddresses } from "../../utils/address";
import FeatureCard from "./FeatureCard";

export default function FeatureDeal() {
  const [featureAddresses, setFeatureAddresses] = useState<string[]>([]);

  useEffect(() => {
    fetchAddresses("BC", setFeatureAddresses);
  }, []);

  return (
    <div className="mt-6 p-6 lg:w-8/12 mx-auto">
      <div className="w-full mb-3 text-lg font-bold">Top Deals</div>
      <div className="flex flex-wrap md:flex-nowrap gap-3">
        <FeatureCard
          title="The Modern"
          description={randomAddress(featureAddresses)}
          image="townhouses/1.jpg"
        />
        <FeatureCard
          title="The Modern"
          description={randomAddress(featureAddresses)}
          image="townhouses/2.jpg"
        />
        <FeatureCard
          title="The Modern"
          description={randomAddress(featureAddresses)}
          image="townhouses/3.jpg"
        />
      </div>
    </div>
  );
}
