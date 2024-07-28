import { useSuspenseQuery } from "@apollo/client";
import { Property } from "@thminggg/db";
import { useSearchParams } from "react-router-dom";
import { GET_PROPERTIES } from "../../graphql/queries/getProperties";
import ListingCard from "../ListingCard/ListingCard";
import Loader from "../Loader/Loader";
import PageBar from "../PageBar/PageBar";

type QueryResult = {
  properties: {
    data: Property[];
    count: number;
  };
};

const ListingResult = ({
  page,
  pageSize,
  fetchVars,
}: {
  page: number;
  pageSize: number;
  fetchVars: { [key: string]: any };
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: queryResult } = useSuspenseQuery(GET_PROPERTIES, {
    variables: fetchVars,
  });

  const {
    properties: { data, count },
  } = queryResult as QueryResult;
  const totalPages = Math.ceil(count / pageSize);

  // {offset} exceeds the records by absurd page query, set the page back to "1"
  if (count !== 0 && data.length === 0) {
    // Use setTimeout to put updating search params as background task, avoid state update in the middle of rendering
    setTimeout(() => {
      searchParams.set("page", "1");
      setSearchParams(searchParams);
    }, 0);
    return <Loader />;
  }

  return (
    <>
      <div className="mt-6 text-xs text-center">{count} Results</div>
      <PageBar currentPage={page} totalPages={totalPages} />
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
      <PageBar className="mt-3" currentPage={page} totalPages={totalPages} />
    </>
  );
};

export default ListingResult;
