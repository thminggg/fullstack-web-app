import { useQuery } from "@apollo/client";
import { Property } from "@thminggg/db";
import DetailSearch from "../../components/DetailSearch/DetailSearch";
import Error from "../../components/Error/Error";
import ListingCard from "../../components/ListingCard/ListingCard";
import Loader from "../../components/Loader/Loader";
import { GET_PROPERTIES } from "../../graphql/queries/getProperties";
import { randomRangeInArray } from "../../utils/utils";

export default function Listing() {
  const { loading, error, data } = useQuery(GET_PROPERTIES);

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;
  const { properties }: { properties: Property[] } = data;

  return (
    <div className="px-6 md:px-36 lg:px-72">
      <DetailSearch />
      <div className="mt-3 text-xs text-center">
        {properties.length} Results
      </div>
      <div className="flex flex-wrap gap-3 justify-center mt-6">
        {randomRangeInArray(properties, 10).map((property, index) => (
          <ListingCard
            key={index}
            property={property}
            image={`condos/${
              (index % Number(process.env.REACT_APP_CONDOS_IMG)) + 1
            }.jpg`}
          />
        ))}
      </div>
    </div>
  );
}
