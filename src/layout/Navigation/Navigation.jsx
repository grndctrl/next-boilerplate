import styles from './styles.module.css'

import Router from 'next/router'
import { useEffect } from 'react'
import { a, useSpring } from '@react-spring/web'
import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

import { presets } from '@/utilities/animations'
import { useLayoutStore } from '@/utilities/zustand'
import Menu from './Menu'

const Navigation = () => {
  const [spring, animate, stop] = useSpring({ y: 0 }, [])

  const isNavigationOpen = useLayoutStore((state) => state.isNavigationOpen)
  const toggleNavigation = useLayoutStore((state) => state.toggleNavigation)

  useEffect(() => {
    document.body.classList.toggle('js-navigation-active', isNavigationOpen)
    animate({ config: presets.medium, y: isNavigationOpen ? window.innerHeight : 0 })
  }, [isNavigationOpen])

  useEffect(() => {
    const onChange = () => {
      toggleNavigation(false)
    }

    Router.events.on('routeChangeStart', debounce(onChange, 400))
    window.addEventListener('resize', throttle(onChange, 100))
    return () => {
      Router.events.off('routeChangeStart', debounce(onChange, 400))
      window.removeEventListener('resize', throttle(onChange, 100))
    }
  }, [])

  return (
    <a.div style={spring} className={styles.navigation}>
      <Menu className={styles.menu} />
    </a.div>
  )
}

export default Navigation
