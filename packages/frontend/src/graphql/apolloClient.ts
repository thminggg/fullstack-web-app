import { ApolloClient, InMemoryCache } from "@apollo/client";

// Apollo Client
const ApolloClientInstance = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHQL_HOST}`,
  cache: new InMemoryCache(),
});

export default ApolloClientInstance;
