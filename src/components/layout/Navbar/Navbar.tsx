import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from '../../ui/Button/Button'
import { Logo } from '../../ui/Logo/Logo'
import styles from './Navbar.module.css'

const HOME_NAV_ITEMS = [
  { label: 'Главная', href: '/#home', id: 'home' },
  { label: 'Товары', href: '/#products', id: 'products' },
  { label: 'О нас', href: '/#about', id: 'about' },
  { label: 'Контакты', href: '/#contacts', id: 'contacts' },
] as const

type IndicatorStyle = {
  left: number
  width: number
  ready: boolean
}

export function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [activeId, setActiveId] = useState<string>(
    location.pathname === '/' ? 'home' : 'products',
  )
  const [indicator, setIndicator] = useState<IndicatorStyle>({
    left: 0,
    width: 0,
    ready: false,
  })
  const menuRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  const updateIndicator = useCallback(() => {
    const menu = menuRef.current
    const activeItem = itemRefs.current[activeId]
    if (!menu || !activeItem) return

    const menuRect = menu.getBoundingClientRect()
    const itemRect = activeItem.getBoundingClientRect()

    setIndicator({
      left: itemRect.left - menuRect.left,
      width: itemRect.width,
      ready: true,
    })
  }, [activeId])

  useLayoutEffect(() => {
    updateIndicator()
  }, [updateIndicator])

  useEffect(() => {
    if (!isHome) {
      setActiveId('products')
      return
    }

    if (location.hash) {
      const hashId = location.hash.replace('#', '')
      if (HOME_NAV_ITEMS.some((item) => item.id === hashId)) {
        setActiveId(hashId)
      }
    }

    const elements = HOME_NAV_ITEMS.map((item) => item.id)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [isHome, location.hash, location.pathname])

  useEffect(() => {
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [updateIndicator])

  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) return
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth' })
    })
  }, [location.pathname, location.hash])

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <Logo href="/" />

        <nav
          ref={menuRef}
          className={styles.menu}
          aria-label="Основная навигация"
        >
          <span
            className={[
              styles.indicator,
              indicator.ready ? styles.indicatorReady : '',
            ]
              .filter(Boolean)
              .join(' ')}
            style={{
              transform: `translateX(${indicator.left}px)`,
              width: indicator.width,
            }}
            aria-hidden
          />

          {HOME_NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              ref={(node) => {
                itemRefs.current[item.id] = node
              }}
              className={[
                styles.menuItem,
                activeId === item.id ? styles.menuItemActive : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button variant="primary" href={isHome ? '#contacts' : '/#contacts'}>
          Заказать сейчас
        </Button>
      </div>
    </header>
  )
}
