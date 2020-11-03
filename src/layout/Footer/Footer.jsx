import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      &copy;{' '}
      {new Date(Date.now()).toLocaleDateString('en-gb', {
        year: 'numeric',
      })}
    </footer>
  )
}

export default Footer
