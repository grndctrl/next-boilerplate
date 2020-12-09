import { apolloClient } from '@src/utilities/apollo'
import queries from '@src/utilities/queries.graphql'

const GraphQLExample = ({ api }) => {
  console.log(api)
  return (
    <main>
      <div className="header-offset"></div>
      <div className="container">
        <h1 className="text-h1">api results</h1>
        <pre className="text-gray-600 my-10">{JSON.stringify(api)}</pre>
      </div>
    </main>
  )
}

const getStaticProps = async (context) => {
  const data = await apolloClient.query({ query: queries.ping }).then((result) => result.data)

  return {
    props: {
      api: data,
    },
  }
}

export { getStaticProps }

export default GraphQLExample
