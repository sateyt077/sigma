import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'
import styles from './Reveal.module.css'

type RevealProps = {
  children: ReactNode
  className?: string
  /** scroll — when in view; mount — on page load like the header */
  trigger?: 'scroll' | 'mount'
  /** CSS time, e.g. `1.15s` or `var(--intro-header-delay)` */
  delay?: string
}

export function Reveal({
  children,
  className,
  trigger = 'scroll',
  delay,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    if (trigger === 'mount') {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.22,
        rootMargin: '0px 0px -28% 0px',
      },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [trigger])

  const isMount = trigger === 'mount'

  return (
    <div
      ref={ref}
      className={[
        isMount ? styles.revealMount : styles.reveal,
        !isMount && visible ? styles.visible : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={
        delay
          ? ({ '--reveal-delay': delay } as CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  )
}
