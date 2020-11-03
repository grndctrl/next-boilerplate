import Head from 'next/head'
import { useEffect } from 'react'
import throttle from 'lodash/throttle'

const Styleguide = ({ api }) => {
  // refs
  const refs = []

  useEffect(() => {
    calcStyles()

    window.addEventListener('resize', throttle(calcStyles, 200))

    return () => {
      window.removeEventListener('resize', throttle(calcStyles, 200))
    }
  }, [])

  const addRef = (element) => {
    if (element) {
      refs.push(element)
    }
  }

  const calcStyles = () => {
    refs.forEach((ref) => {
      const style = ref.getAttribute('data-style')
      const span = ref.querySelector('.style')

      span.innerHTML = window.getComputedStyle(ref)[style]
    })

    console.log('done')
  }

  return (
    <main>
      <Head>
        <title>Next App - Styleguide</title>
      </Head>

      <div className="header-offset"></div>
      <div className="container">
        <div className="my-4">
          <p className="text-gray-600">Headings</p>
          <h1 ref={(e) => addRef(e)} data-style="fontSize" className="text-h1">
            Heading 1<span className="style mx-4 text-gray-600"></span>
            <span className="class mx-4 text-blue-400">text-h1</span>
          </h1>
          <h2 ref={(e) => addRef(e)} data-style="fontSize" className="text-h2">
            Heading 2<span className="style mx-4 text-gray-600"></span>
            <span className="class mx-4 text-blue-400">text-h2</span>
          </h2>
          <h3 ref={(e) => addRef(e)} data-style="fontSize" className="text-h3">
            Heading 3<span className="style mx-4 text-gray-600"></span>
            <span className="class mx-4 text-blue-400">text-h3</span>
          </h3>
          <h4 ref={(e) => addRef(e)} data-style="fontSize" className="text-h4">
            Heading 4<span className="style mx-4 text-gray-600"></span>
            <span className="class mx-4 text-blue-400">text-h4</span>
          </h4>
        </div>
        <div className="my-4">
          <p className="text-gray-600">Paragrahs</p>
          <p ref={(e) => addRef(e)} data-style="fontSize" className="text-p1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ea quasi provident enim
            exercitationem laborum distinctio et, maxime labore consequatur accusamus consequuntur
            hic nostrum illum ex laudantium minus blanditiis velit.
            <span className="style mx-4 text-gray-600"></span>
            <span className="class mx-4 text-blue-400">text-p1</span>
          </p>
          <p ref={(e) => addRef(e)} data-style="fontSize" className="text-p2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis perferendis laborum
            soluta omnis deleniti nesciunt perspiciatis aperiam, cupiditate quod ad nobis minus
            consequatur possimus deserunt, voluptatem sed ipsam minima enim!
            <span className="style mx-4 text-gray-600"></span>
            <span className="class mx-4 text-blue-400">text-p2</span>
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

export default Styleguide
