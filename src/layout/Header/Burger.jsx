import styles from './styles.module.css'

import { useEffect } from 'react'
import classNames from 'classnames'
import { a, useSprings } from '@react-spring/web'

import { presets } from '@/utilities/animations'
import { useLayoutStore } from '@/utilities/zustand'

const Burger = () => {
  const isNavigationOpen = useLayoutStore((state) => state.isNavigationOpen)
  const toggleNavigation = useLayoutStore((state) => state.toggleNavigation)

  const cs = classNames(styles.burger, {
    'js-active': isNavigationOpen,
  })

  const [springs, setSprings] = useSprings(2, () => ({ rotate: 0, y: 0 }))

  useEffect(() => {
    setSprings(
      [1, -1].map((modifier) => ({
        to: isNavigationOpen
          ? [
              {
                config: presets.fast,
                y: 8 * modifier,
              },
              {
                config: presets.wobbly,
                rotate: modifier * 45,
              },
            ]
          : [
              {
                config: presets.fast,
                rotate: 0,
              },
              {
                config: presets.wobbly,
                y: 0,
              },
            ],
      }))
    )
  }, [isNavigationOpen])

  const handleClick = () => {
    toggleNavigation()
  }

  return (
    <div className={cs} onClick={() => handleClick()}>
      {springs.map((spring, index) => (
        <a.span key={index} style={spring} className={styles.bun}></a.span>
      ))}
    </div>
  )
}

export default Burger
