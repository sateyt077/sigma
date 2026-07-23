import type { ReactNode } from 'react'
import boxIcon from '../../../assets/icons/box-minimalistic.svg'
import styles from './SectionBadge.module.css'

type SectionBadgeProps = {
  children: ReactNode
  iconSrc?: string
}

export function SectionBadge({
  children,
  iconSrc = boxIcon,
}: SectionBadgeProps) {
  return (
    <div className={styles.badge}>
      <span className={styles.glow} aria-hidden />
      <img
        className={styles.icon}
        src={iconSrc}
        alt=""
        width={22}
        height={22}
      />
      <span className={styles.label}>{children}</span>
    </div>
  )
}
