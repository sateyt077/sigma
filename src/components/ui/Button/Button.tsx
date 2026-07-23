import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'secondary'

type SharedProps = {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
}

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button({
  variant = 'primary',
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(' ')

  if ('href' in props && props.href) {
    const { href, ...linkProps } = props
    return (
      <a href={href} className={classes} {...linkProps}>
        <span className={styles.label}>{children}</span>
      </a>
    )
  }

  const { type = 'button', ...buttonProps } = props as ButtonAsButton

  return (
    <button type={type} className={classes} {...buttonProps}>
      <span className={styles.label}>{children}</span>
    </button>
  )
}
