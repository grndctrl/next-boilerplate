import '@src/styles/globals.css'

import { useEffect } from 'react'
import { ApolloProvider } from '@apollo/client'
import { a, Transition } from '@react-spring/web'

import { useAppStore } from '@src/utilities/zustand'
import { apolloClient } from '@src/utilities/apollo'
import { Wiper } from '@src/layout/Wiper'
import { Navigation } from '@src/layout/Navigation'
import { Header } from '@src/layout/Header'
import { Footer } from '@src/layout/Footer'

function App({ Component, pageProps, router }) {
  const loaded = useAppStore((state) => state.loaded)

  const transitionItems = [
    {
      id: router.route,
      Component,
      pageProps,
    },
  ]

  useEffect(() => {
    loaded()
  }, [])

  return (
    <ApolloProvider client={apolloClient}>
      <div className="layout">
        <div className="overlays">
          <Navigation />
          <Wiper />
        </div>
        <Header />

        <Transition
          items={transitionItems}
          keys={(item) => item.id}
          from={{ opacity: 0 }}
          initial={{ opacity: 1 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0, position: 'absolute', top: 0 }}
          trail={400}
        >
          {(styles, { pageProps, Component }) => (
            <a.div style={{ ...styles, width: '100%' }} className="z-0">
              <Component {...pageProps} />
            </a.div>
          )}
        </Transition>

        <Footer />
      </div>
    </ApolloProvider>
  )
}

export default App
