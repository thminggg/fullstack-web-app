import styles from "./DetailSearch.module.css";

export default function FilterButton({
  children,
}: {
  children: string | JSX.Element;
}) {
  return (
    <button
      className={`rounded-lg bg-white px-3 font-semibold ${styles.filterBtn}`}
    >
      {children}
    </button>
  );
}
