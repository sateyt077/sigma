import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'
import styles from './PageShell.module.css'

export function PageShell() {
  return (
    <div className={styles.shell}>
      <div className={styles.topFade} aria-hidden />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
