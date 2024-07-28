import styles from "./DetailSearch.module.scss";

export default function OptionButton({
  children,
  handleOnClick,
}: {
  children: string | JSX.Element;
  handleOnClick: () => void;
}) {
  return (
    <button
      onClick={handleOnClick}
      className={`flex justify-center items-center grow gap-1 p-1 rounded-lg bg-white ${styles.optionBtn}`}
    >
      {children}
    </button>
  );
}
