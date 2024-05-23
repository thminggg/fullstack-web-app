import { useQuery } from "@apollo/client";
import { Property } from "@thminggg/db";
import { useSearchParams } from "react-router-dom";
import DetailSearch from "../../components/DetailSearch/DetailSearch";
import Error from "../../components/Error/Error";
import ListingCard from "../../components/ListingCard/ListingCard";
import Loader from "../../components/Loader/Loader";
import { GET_PROPERTIES } from "../../graphql/queries/getProperties";

type QueryResult = {
  properties: {
    data: Property[];
    count: number;
  };
};

export default function Listing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageSize = searchParams.get("size");
  const page = searchParams.get("page");

  const {
    loading,
    error,
    data: queryResult,
  } = useQuery(GET_PROPERTIES, {
    variables: {
      pageSize: parseInt(pageSize || "20"),
      offset: parseInt(page || "0"),
    },
  });

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;
  const {
    properties: { data, count },
  }: QueryResult = queryResult;

  return (
    <div className="px-6 md:px-36 lg:px-72">
      <DetailSearch />
      <div className="mt-3 text-xs text-center">{count} Results</div>
      <div className="flex flex-wrap gap-3 justify-center mt-6">
        {data.map((property, index) => (
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
