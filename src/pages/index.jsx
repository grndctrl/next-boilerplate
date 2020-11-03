import Image from 'next/image'
import Head from 'next/head'

const Home = ({ api }) => {
  return (
    <main>
      <div className="header-offset"></div>
      <div className="container">
        <Head>
          <title>Next App - Home</title>
        </Head>

        <h1 className="text-h1">Hello World</h1>
        <div className="mt-4 md:w-8/12 lg:w-6/12">
          <p className="text-p1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam porro sed dolore
            facere nulla quo obcaecati. Voluptate sed non corporis sunt? Minima vel dolores sequi
            soluta velit iste modi quo!
          </p>
          <p className="text-p2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nostrum eius architecto
            suscipit, nulla odio esse provident natus, qui, minus nisi vitae fuga! Harum quibusdam
            commodi officiis aut blanditiis facilis.
          </p>
        </div>
      </div>
    </main>
  )
}

const getStaticProps = async (context) => {
  return {
    props: {
      api: {},
    },
  }
}

export { getStaticProps }

export default Home
