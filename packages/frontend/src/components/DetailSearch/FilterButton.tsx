import { useSearchParams } from "react-router-dom";
import styles from "./DetailSearch.module.scss";
import { SEARCH_PARAMS } from "../../common/const";

export default function FilterButton({
  children,
  val,
}: {
  children: string | JSX.Element;
  val: string;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const bedroomNum = searchParams.get(SEARCH_PARAMS.BEDROOM) || "0";
  const isActive = bedroomNum === val;
  const handleFilterClick = () => {
    if (val === "0") {
      searchParams.delete(SEARCH_PARAMS.BEDROOM);
      setSearchParams(searchParams);
      return;
    }

    searchParams.set(SEARCH_PARAMS.BEDROOM, val);
    setSearchParams(searchParams);
  };

  return (
    <button
      className={`rounded-lg px-3 ${styles.filterBtn} ${
        isActive && styles.activeBtn
      } ${!isActive && "bg-white"}`}
      onClick={handleFilterClick}
    >
      {children}
    </button>
  );
}
