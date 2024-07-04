import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SEARCH_PARAMS } from "../../common/const";
import styles from "./Search.module.scss";
import { Link } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearchKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleSearch = () => {
    return navigate(`/listing?${SEARCH_PARAMS.QUERY}=${query}`);
  };

  return (
    <div className={`flex justify-center mt-16`}>
      <div
        className={`flex flex-col p-6 min-w-[90vw] lg:min-w-[60vw] ${styles.searchBox}`}
      >
        <div className="flex gap-1 mb-5">
          <Link to={"/listing"} className={`${styles.btn}`}>
            Browse
          </Link>
          <Link to={"/posting"} className={`${styles.btn}`}>
            Post
          </Link>
        </div>
        <div className={`flex relative p-3 items-center ${styles.searchBar}`}>
          <input
            className="inline w-full"
            placeholder="City, Address"
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={handleSearchKeyUp}
          />
          <button
            className="absolute right-3 z-10"
            onClick={handleSearch}
            title="search"
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
}
