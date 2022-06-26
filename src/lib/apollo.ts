import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({

  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4sp5n7d2dt501wg4uqx09jl/master',
  cache: new InMemoryCache()

});