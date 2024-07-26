import Loader from "../../components/Loader/Loader";
import LoggedIn from "../../components/LoggedIn/LoggedIn";
import LoginModal from "../../components/LoginModal/LoginModal";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const { pending, user } = useAuth();
  if (pending) return <Loader />;
  return user ? <LoggedIn /> : <LoginModal />;
};

export default Login;
