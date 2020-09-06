import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const link = new HttpLink({
  uri: process.env.GRAPH_CMS_CLIENT,
  credentials: 'same-origin',
})

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

export default client
