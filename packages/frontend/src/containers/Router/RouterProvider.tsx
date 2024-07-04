import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../containers/App/App";
import ErrorPage from "../../containers/ErrorPage/ErrorPage";
import Listing from "../../containers/Listing/Listing";
import Posting from "../../containers/Posting/Posting";
import RootLayout from "../../containers/RootLayout/RootLayout";
import Unit from "../../containers/Unit/Unit";
import Login from "../Login/Login";

// React Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout withMargin={false} />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "properties/:brokerId/:propertyId",
        element: <Unit />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <RootLayout withMargin={true} />,
    children: [
      {
        path: "/listing",
        element: <Listing />,
      },
      {
        path: "/posting",
        element: <Posting />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const _RouterProvider = () => <RouterProvider router={router} />;

export default _RouterProvider;
