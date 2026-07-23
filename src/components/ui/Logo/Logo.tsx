import logoUrl from '../../../assets/icons/logo.svg'
import styles from './Logo.module.css'

type LogoProps = {
  className?: string
  href?: string
}

export function Logo({ className, href = '/' }: LogoProps) {
  return (
    <a
      href={href}
      className={[styles.logo, className].filter(Boolean).join(' ')}
      aria-label="СИГМА"
    >
      <img src={logoUrl} alt="СИГМА" width={148} height={37} />
    </a>
  )
}
