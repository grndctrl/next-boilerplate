import React, { useRef, useState } from 'react'
import Head from 'next/head'
import { Canvas, useFrame } from 'react-three-fiber'
import { OrbitControls } from 'drei'

const Box = (props) => {
  const mesh = useRef()
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [2, 2, 2] : [1, 1, 1]}
      onClick={(event) => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hover ? 'black' : 'gray'} />
    </mesh>
  )
}

const ReactThreeFiberExample = ({ api }) => {
  return (
    <main>
      <Head>
        <title>Next App - r3f</title>
      </Head>

      <div className="container min-h-screen flex flex-col">
        <div className="header-offset"></div>
        <h1 className="text-h1">React Three Fiber</h1>
        <Canvas className="flex-grow">
          <OrbitControls enableZoom={false} />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
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

export default ReactThreeFiberExample
