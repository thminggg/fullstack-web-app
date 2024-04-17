import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./containers/ErrorPage/ErrorPage";
import Listing from "./containers/Listing/Listing";
import RootLayout from "./containers/RootLayout/RootLayout";
import Unit from "./containers/Unit/Unit";
import ApolloClientInstance from "./graphql/apolloClient";
import "./index.css";

// React Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/listing",
        element: <Listing />,
      },
      {
        path: "properties/:brokerId/:propertyId",
        element: <Unit />,
        loader: async ({ params }) => {
          return { some: "data" };
        },
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={ApolloClientInstance}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
