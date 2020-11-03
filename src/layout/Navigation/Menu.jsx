import styles from './styles.module.css'

import Link from 'next/link'

const Menu = ({ className }) => {
  return (
    <ul className={className}>
      <li className={styles.menuItem}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className={styles.menuItem}>
        <Link href="/styleguide">
          <a>Styleguide</a>
        </Link>
      </li>
      <li className={styles.menuItem}>
        <Link href="/graphql-example">
          <a>GraphQL Example</a>
        </Link>
      </li>
    </ul>
  )
}

export default Menu
