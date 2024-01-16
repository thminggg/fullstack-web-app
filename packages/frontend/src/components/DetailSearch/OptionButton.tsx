import styles from "./DetailSearch.module.css";

export default function OptionButton({
  children,
}: {
  children: string | JSX.Element;
}) {
  return (
    <button
      className={`flex justify-center items-center grow gap-1 p-1 rounded-lg bg-white ${styles.optionBtn}`}
    >
      {children}
    </button>
  );
}
