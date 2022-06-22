import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o7ruyk12po01xm6kkb1yf1/master',
  cache: new InMemoryCache()
})