import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const uri =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_ENDPOINT_PROD
    : process.env.REACT_APP_API_ENDPOINT_DEV

export default new ApolloClient({
  link: new HttpLink({ uri }),
  cache: new InMemoryCache()
})
