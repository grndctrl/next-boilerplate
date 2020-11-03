import styles from './styles.module.css'

import { Menu } from '@/layout/Navigation'
import Burger from './Burger'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="header-left">
        <Menu className={styles.menu} />
      </div>
      <div className="header-right">
        <Burger />
      </div>
    </header>
  )
}

export default Header
