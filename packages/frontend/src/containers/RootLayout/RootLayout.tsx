import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

export default function RootLayout() {
  return (
    <div className="relative min-h-screen pb-9">
      <Nav />
      <Outlet />
    </div>
  );
}
