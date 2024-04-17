import { ApolloError } from "@apollo/client";

// TODO: beautify error component
export default function Error({ error }: { error?: ApolloError }) {
  return <>{`Error! ${error?.message}`}</>;
}
