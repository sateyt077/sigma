import partnerLogo from '../../../assets/images/partner-logo.png'
import styles from './Partners.module.css'

const PARTNER_LOGOS = [
  { id: 1, src: partnerLogo, alt: 'Партнёр 1' },
  { id: 2, src: partnerLogo, alt: 'Партнёр 2' },
  { id: 3, src: partnerLogo, alt: 'Партнёр 3' },
  { id: 4, src: partnerLogo, alt: 'Партнёр 4' },
] as const

export function Partners() {
  return (
    <section className={styles.partners} aria-label="Партнёры">
      <ul className={styles.list}>
        {PARTNER_LOGOS.map((logo) => (
          <li key={logo.id} className={styles.item}>
            <div className={styles.imageWrap}>
              <img
                className={styles.image}
                src={logo.src}
                alt={logo.alt}
                width={205}
                height={64}
                loading="eager"
                decoding="async"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
