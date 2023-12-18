import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={`flex items-center w-full ${styles.navBar}`}>
      <img
        src="logo.svg"
        alt="logo"
        className={`ml-3 pt-3 pb-3 ${styles.logo}`}
      />
    </div>
  );
}
