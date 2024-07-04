import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import RouterProvider from "./containers/Router/RouterProvider";
import ApolloClientInstance from "./graphql/apolloClient";
import { FirebaseProvider } from "./containers/Firebase/FirebaseProvider";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={ApolloClientInstance}>
      <FirebaseProvider>
        <RouterProvider />
      </FirebaseProvider>
    </ApolloProvider>
  </React.StrictMode>
);
