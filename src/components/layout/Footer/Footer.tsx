import footerBg from '../../../assets/images/footer.jpg'
import emailIcon from '../../../assets/icons/social/email.svg'
import linkedinIcon from '../../../assets/icons/social/linkedin.svg'
import telegramIcon from '../../../assets/icons/social/telegram.svg'
import xIcon from '../../../assets/icons/social/x.svg'
import { Logo } from '../../ui/Logo/Logo'
import styles from './Footer.module.css'

const SOCIAL_LINKS = [
  {
    id: 'telegram',
    href: '#',
    label: 'Telegram',
    icon: telegramIcon,
  },
  {
    id: 'x',
    href: '#',
    label: 'X',
    icon: xIcon,
  },
  {
    id: 'email',
    href: 'mailto:npkp.sigma@gmail.com',
    label: 'Email',
    icon: emailIcon,
  },
  {
    id: 'linkedin',
    href: '#',
    label: 'LinkedIn',
    icon: linkedinIcon,
  },
] as const

const NAV_COLUMNS = [
  {
    title: 'Главная',
    links: [
      { label: 'Hero', href: '/#home' },
      { label: 'Товары', href: '/#products' },
      { label: 'О нас', href: '/#about' },
      { label: 'Вопросы', href: '/#faq' },
      { label: 'Контакты', href: '/#contacts' },
    ],
  },
  {
    title: 'Страницы',
    links: [
      { label: 'Главная', href: '/' },
      { label: 'Продукты', href: '/products' },
      { label: 'Политика', href: '#' },
      { label: 'Правила', href: '#' },
      { label: 'Документы', href: '#' },
    ],
  },
  {
    title: 'Контакты',
    links: [
      { label: 'Контакт', href: '/#contacts' },
      { label: 'Контакт', href: '/#contacts' },
      { label: 'Контакт', href: '/#contacts' },
    ],
  },
] as const

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.background} aria-hidden>
        <img
          src={footerBg}
          alt=""
          width={1440}
          height={666}
          loading="eager"
          decoding="async"
          fetchPriority="low"
        />
      </div>

      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.brandText}>
            <Logo />
            <p className={styles.tagline}>
              Оптика, тепловизоры и оборудование
            </p>
          </div>

          <nav className={styles.socials} aria-label="Социальные сети">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.id}
                className={styles.socialLink}
                href={item.href}
                aria-label={item.label}
                {...(item.href.startsWith('http')
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {})}
              >
                <img src={item.icon} alt="" width={24} height={24} />
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.nav}>
          {NAV_COLUMNS.map((column) => (
            <nav
              key={column.title}
              className={styles.column}
              aria-label={column.title}
            >
              <p className={styles.columnTitle}>{column.title}</p>
              <ul className={styles.columnList}>
                {column.links.map((link, index) => (
                  <li key={`${column.title}-${index}`}>
                    <a className={styles.columnLink} href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </footer>
  )
}
