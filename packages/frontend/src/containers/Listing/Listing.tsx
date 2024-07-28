import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useSearchParams } from "react-router-dom";
import { DB_FIELDS, SEARCH_PARAMS } from "../../common/const";
import DetailSearch from "../../components/DetailSearch/DetailSearch";
import Error from "../../components/Error/Error";
import ListingResult from "../../components/ListingResult/ListingResult";
import Loader from "../../components/Loader/Loader";
import { clamp } from "../../utils/utils";

const PAGE_SIZE = 20;
const PAGE_SIZE_MAX = 50;
const PAGE = 1;
const pageSizeClamp = clamp(PAGE_SIZE, PAGE_SIZE_MAX);

export default function Listing() {
  // TODO: better tidy up the search params filters and sorting
  const [searchParams] = useSearchParams();
  const pageSize = pageSizeClamp(
    Number(searchParams.get(SEARCH_PARAMS.PAGE_SIZE) || PAGE_SIZE)
  );
  const page = Number(searchParams.get(SEARCH_PARAMS.PAGE) || PAGE);
  const searchQuery = searchParams.get(SEARCH_PARAMS.QUERY)
    ? searchParams.get(SEARCH_PARAMS.QUERY)
    : null;
  const bedroomFilter = searchParams.get(SEARCH_PARAMS.BEDROOM)
    ? `${DB_FIELDS.BEDROOM} >= ${searchParams.get(SEARCH_PARAMS.BEDROOM)}`
    : null;
  const bathroomFilter = searchParams.get(SEARCH_PARAMS.BATHROOM)
    ? `${DB_FIELDS.BATHROOM} >= ${searchParams.get(SEARCH_PARAMS.BATHROOM)}`
    : null;
  const sqftFilter = searchParams.get(SEARCH_PARAMS.SIZE_FILTER)
    ? `${DB_FIELDS.SIZE} >= ${searchParams.get(SEARCH_PARAMS.SIZE_FILTER)}`
    : null;
  const priceSort = searchParams.get(SEARCH_PARAMS.PRICE)
    ? `${DB_FIELDS.PRICE} ${searchParams.get(SEARCH_PARAMS.PRICE)}`
    : null;
  const sizeSort = searchParams.get(SEARCH_PARAMS.SIZE)
    ? `${DB_FIELDS.SIZE} ${searchParams.get(SEARCH_PARAMS.SIZE)}`
    : null;

  const fetchVars = {
    pageSize: pageSize,
    offset: (page - 1) * pageSize,
    filters: [bedroomFilter, bathroomFilter, sqftFilter],
    orderBys: [priceSort, sizeSort],
    searchQuery: searchQuery,
  };

  return (
    <>
      <DetailSearch />
      <ErrorBoundary FallbackComponent={Error}>
        <Suspense fallback={<Loader />}>
          <ListingResult
            page={page}
            pageSize={pageSize}
            fetchVars={fetchVars}
          />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
