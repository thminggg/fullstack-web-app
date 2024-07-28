import { ApolloQueryResult } from "@apollo/client";
import ApolloClientInstance from "../graphql/apolloClient";

// TODO: update the method
export const callApollo = async ({
  query,
  variables,
}: {
  query: string;
  variables?: any;
}): Promise<ApolloQueryResult<any>> => {
  const response = await fetch(process.env.REACT_APP_GRAPHQL_HOST || "", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return (await response.json()) as ApolloQueryResult<any>;
};
