import { FaLocationArrow, FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./DetailSearch.module.css";
import Separator from "../Separator/Separator";
import FilterButton from "./FilterButton";
import OptionButton from "./OptionButton";

export default function DetailSearch() {
  const handleSearchKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    console.log("search");
  };

  return (
    <div className={`flex flex-col justify-center mt-16 mx-auto`}>
      <div className="flex">
        <div className={`flex grow p-3 items-center ${styles.searchBar}`}>
          <input
            className="grow"
            placeholder="City, Address"
            onKeyUp={handleSearchKeyUp}
          />
          <button className="z-10" onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
        <button
          className={`flex items-center gap-2 ml-3 px-6 ${styles.mapButton}`}
          onClick={() => console.log("map")}
        >
          <FaLocationArrow />
          Map
        </button>
      </div>
      <div className="flex mt-3 gap-3">
        <OptionButton>
          <>
            SORT
            <IoIosArrowDown />
          </>
        </OptionButton>
        <OptionButton>FILTER</OptionButton>
        <OptionButton>SAVE SEARCH</OptionButton>
      </div>
      <Separator className="mt-3 mb-3" />
      <div className="flex flex-wrap gap-3">
        <FilterButton>1+ BED</FilterButton>
        <FilterButton>2+ BED</FilterButton>
        <FilterButton>3+ BED</FilterButton>
        <FilterButton>4+ BED</FilterButton>
        <FilterButton>5+ BED</FilterButton>
      </div>
    </div>
  );
}
