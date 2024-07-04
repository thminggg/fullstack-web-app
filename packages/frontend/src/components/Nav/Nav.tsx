import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styles from "./Nav.module.css";

export default function Nav() {
  const { user } = useAuth();

  return (
    <div className={`flex items-center w-full ${styles.navBar}`}>
      <Link to="/">
        <img
          src="/logo.svg"
          alt="logo"
          className="ml-3 pt-3 pb-3 h-14 3xl:h-20"
        />
      </Link>
      <Link className="text-white ml-auto pr-3" to="/login">
        {user ? user?.displayName : "Login"}
      </Link>
    </div>
  );
}
