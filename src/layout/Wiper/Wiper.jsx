import styles from './styles.module.css'

import Router from 'next/router'
import { a, useSpring, config } from '@react-spring/web'

import { presets } from '@/utilities/animations'

const Wiper = () => {
  const [spring, animate] = useSpring({ config: presets.medium, to: { y: '100vh' } }, [])

  Router.events.on('routeChangeStart', () =>
    animate({
      to: [{ y: '0vh' }, { y: '-100vh' }],
      from: { y: '100vh' },
    })
  )

  return <a.div style={spring} className={styles.wiper} />
}

export default Wiper
