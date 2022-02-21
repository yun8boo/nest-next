import { ApolloClient, InMemoryCache } from "@apollo/client";

const uri =
  process.env.NODE_ENV === "development"
    ? "http://0.0.0.0:5000/graphql"
    : "graphql";

export const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});
