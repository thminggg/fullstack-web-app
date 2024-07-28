import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import { SEARCH_PARAMS } from "../../common/const";
import Separator from "../Separator/Separator";
import styles from "./DetailSearch.module.scss";
import FilterButton from "./FilterButton";
import FilterModal from "./FilterModal";
import OptionButton from "./OptionButton";
import SortingModal from "./SortingModal";

export default function DetailSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get(SEARCH_PARAMS.QUERY)
  );

  // Modal status
  const [sortModal, setSortModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);

  const handleSearchKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleSearch = () => {
    if (searchQuery === "") {
      searchParams.delete(SEARCH_PARAMS.QUERY);
      setSearchParams(searchParams);
      return;
    }

    if (searchQuery !== "") {
      searchParams.set(SEARCH_PARAMS.QUERY, searchQuery || "");
      setSearchParams(searchParams);
    }
  };

  return (
    <div className={`flex flex-col justify-center mt-16 mx-auto`}>
      <div className="flex">
        <div className={`flex grow p-3 items-center ${styles.searchBar}`}>
          <input
            className="grow"
            placeholder="City, Address"
            onKeyUp={handleSearchKeyUp}
            onChange={(e) => setSearchQuery(e.target.value)}
            defaultValue={searchParams.get(SEARCH_PARAMS.QUERY) || ""}
          />
          <button className="z-10" onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="flex mt-3 gap-3">
        <OptionButton handleOnClick={() => setSortModal((curr) => !curr)}>
          <>
            SORT
            <IoIosArrowDown />
          </>
        </OptionButton>
        <OptionButton handleOnClick={() => setFilterModal((curr) => !curr)}>
          <>
            FILTER
            <IoIosArrowDown />
          </>
        </OptionButton>
      </div>
      <Separator className="mt-3 mb-3" />
      <div className="flex flex-wrap gap-3">
        <FilterButton val="0">0+ BED</FilterButton>
        <FilterButton val="1">1+ BED</FilterButton>
        <FilterButton val="2">2+ BED</FilterButton>
        <FilterButton val="3">3+ BED</FilterButton>
        <FilterButton val="4">4+ BED</FilterButton>
        <FilterButton val="5">5+ BED</FilterButton>
      </div>
      <SortingModal sortModal={sortModal} setSortModal={setSortModal} />
      <FilterModal
        filterModal={filterModal}
        setFilterModal={setFilterModal}
      ></FilterModal>
    </div>
  );
}
