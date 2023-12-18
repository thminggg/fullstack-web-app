import { useState } from "react";
import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [isBuy, setIsBuy] = useState(true);

  return (
    <div className={`flex justify-center mt-16`}>
      <div className={`flex flex-col p-6 ${styles.searchBox}`}>
        <div className="flex items-center gap-1 mb-5">
          <button
            className={`${styles.btn} ${isBuy && styles.activeBtn}`}
            onClick={() => setIsBuy(true)}
          >
            Buy
          </button>
          <button
            className={`${styles.btn} ${!isBuy && styles.activeBtn}`}
            onClick={() => setIsBuy(false)}
          >
            Rent
          </button>
          <a href="/listing" className={`${styles.btn}`}>
            Browse
          </a>
        </div>
        <div className={`flex relative p-3 items-center ${styles.searchBar}`}>
          <input className="inline w-full" placeholder="City, Address" />
          <button
            className="absolute right-3 z-10"
            onClick={() => console.log("search")}
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
}
