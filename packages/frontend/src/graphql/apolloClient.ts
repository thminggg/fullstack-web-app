import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import ApolloLinkTimeout from "apollo-link-timeout";

// Apollo Link to trigger timeout, default timeout 10 seconds
const timeoutLink = new ApolloLinkTimeout(
  Number(process.env.REACT_APP_GRAPHQL_TIMEOUT || 10000)
); // 10 second timeout
const httpLink = createHttpLink({ uri: process.env.REACT_APP_GRAPHQL_HOST });
const timeoutHttpLink = timeoutLink.concat(httpLink);

// Apollo Client
const ApolloClientInstance = new ApolloClient({
  cache: new InMemoryCache(),
  link: timeoutHttpLink,
});

export default ApolloClientInstance;
