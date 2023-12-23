import { FaLocationArrow, FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./DetailSearch.module.css";

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
    <div className={`flex flex-col w-10/12 justify-center mt-16 mx-auto`}>
      <div>Listing</div>
      <div className={`flex ${styles.searchBox}`}>
        <div
          className={`flex grow relative p-3 items-center ${styles.searchBar}`}
        >
          <input
            className="w-full"
            placeholder="City, Address"
            onKeyUp={handleSearchKeyUp}
          />
          <button className="absolute right-3 z-10" onClick={handleSearch}>
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
        <button
          className={`flex justify-center items-center grow gap-3 p-1 ${styles.optionBtn}`}
        >
          SORT <IoIosArrowDown />
        </button>
        <button className={`grow p-1 ${styles.optionBtn}`}>FILTER</button>
        <button className={`grow p-1 ${styles.optionBtn}`}>SAVE SEARCH</button>
      </div>
    </div>
  );
}
