import { InMemoryCache, ApolloClient, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const api =
  process.env.NODE_ENV === 'development'
    ? process.env.DEV_SERVER + process.env.API_URL
    : process.env.PROD_SERVER + process.env.API_URL

const httpLink = createHttpLink({
  uri: api,
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = 'MEXzfGPv7ruMIS4rRzO0qZZ9Zb6Jfmxy'
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  }
})

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export { apolloClient }
