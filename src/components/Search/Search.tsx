import styles from "./Search.module.css";

export default function Search() {
  return (
    <div className={`flex justify-center mt-16`}>
      <div className={`text-center ${styles.searchBox} sm:${styles.test}`}>
        Search
      </div>
    </div>
  );
}
