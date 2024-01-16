import { useEffect, useState } from "react";
import DetailSearch from "../../components/DetailSearch/DetailSearch";
import ListingCard from "../../components/ListingCard/ListingCard";
import { fetchAddresses } from "../../utils/address";
import { randomRangeInArray } from "../../utils/utils";

export default function Listing() {
  const [addresses, setAddresses] = useState<string[]>([]);

  useEffect(() => {
    fetchAddresses("BC", setAddresses);
  }, []);

  return (
    <div className="px-6 md:px-36 lg:px-72">
      <DetailSearch />
      <div className="flex flex-wrap gap-3 justify-center mt-6">
        {randomRangeInArray(addresses, 10).map((address, index) => (
          <ListingCard
            key={index}
            title="The Modern"
            description={address}
            image={`condos/${
              (index % Number(process.env.REACT_APP_CONDOS_IMG)) + 1
            }.jpg`}
          />
        ))}
      </div>
    </div>
  );
}
