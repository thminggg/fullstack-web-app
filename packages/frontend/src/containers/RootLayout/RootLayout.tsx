import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

export default function RootLayout({ withMargin }: { withMargin: boolean }) {
  return (
    <div className="relative min-h-screen pb-9">
      <Nav />
      {withMargin ? (
        <div className="px-6 md:px-36 lg:px-72">
          <Outlet />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}
