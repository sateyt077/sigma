import type { ReactNode } from 'react'
import styles from './AdvantageCard.module.css'

export type AdvantageCardProps = {
  title: string
  description: ReactNode
  wide?: boolean
  className?: string
}

export function AdvantageCard({
  title,
  description,
  wide = false,
  className,
}: AdvantageCardProps) {
  return (
    <article
      className={[
        styles.card,
        wide ? styles.wide : styles.narrow,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={styles.illustration} aria-hidden>
        {/* Animated illustration placeholder */}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  )
}
