import type { CSSProperties } from 'react'
import heroImage from '../../../assets/images/hero-image.jpg'
import { Button } from '../../ui/Button/Button'
import styles from './Hero.module.css'

const HEADING_LINES = [
  { text: 'надежный', offset: 0 },
  { text: 'поставщик', offset: 109 },
  { text: 'высоких', offset: 0 },
  { text: 'технологий', offset: 59 },
] as const

export function Hero() {
  return (
    <section className={styles.hero} id="home" aria-label="Главный экран">
      <div className={styles.background} aria-hidden>
        <img
          className={styles.backgroundImage}
          src={heroImage}
          alt=""
          width={2352}
          height={920}
        />
        <div className={styles.backgroundGradient} />
      </div>

      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            {HEADING_LINES.map((line, index) => (
              <span
                key={line.text}
                className={styles.headingLine}
                style={
                  {
                    marginLeft: line.offset,
                    '--line-index': index,
                  } as CSSProperties
                }
              >
                {line.text}
              </span>
            ))}
          </h1>

          <p className={styles.description}>
            Оптика, тепловизоры и оборудование — прямые поставки мировых
            производителей
          </p>

          <div className={styles.directions}>
            <div className={styles.directionsInfo}>
              <p className={styles.directionsLabel}>Направления</p>
              <p className={styles.directionsValue}>Более 10</p>
            </div>

            <div className={styles.directionsActions}>
              <Button variant="primary" href="#contacts">
                Заказать сейчас
              </Button>
              <Button variant="secondary" href="/products">
                Смотреть все
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
