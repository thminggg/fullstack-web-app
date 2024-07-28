import { useQuery } from "@apollo/client";
import { Property } from "@thminggg/db";
import { GET_PROPERTIES } from "../../graphql/queries/getProperties";
import { getRandomNumber } from "../../utils/utils";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import FeatureCard from "./FeatureCard";

type QueryResult = {
  properties: {
    data: Property[];
    count: number;
  };
};

export default function FeatureDeal() {
  const {
    loading,
    error,
    data: queryResult,
  } = useQuery(GET_PROPERTIES, {
    variables: {
      pageSize: 3,
    },
  });
  const randomImageSeed = getRandomNumber(
    Number(process.env.REACT_APP_CONDOS_IMG)
  );

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  const {
    properties: { data, count },
  } = queryResult as QueryResult;

  return (
    <div className="mt-6 p-6 lg:w-8/12 mx-auto">
      <div className="w-full mb-3 text-lg font-bold">Top Deals</div>
      <div className="flex flex-wrap md:flex-nowrap gap-3">
        {count > 0 &&
          data.map((property, index) => (
            <FeatureCard
              key={index}
              property={property}
              image={`condos/compressed_${
                ((index + randomImageSeed) %
                  Number(process.env.REACT_APP_CONDOS_IMG)) +
                1
              }.jpg`}
            />
          ))}
      </div>
    </div>
  );
}
