import styles from './ProductCard.module.css'

export type Product = {
  id: string
  title: string
  description: string
  image: string
}

type ProductCardProps = {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <article
      className={[styles.card, className].filter(Boolean).join(' ')}
      tabIndex={0}
      aria-label={product.title}
    >
      <div className={styles.media} aria-hidden>
        <img
          className={styles.image}
          src={product.image}
          alt=""
          width={254}
          height={328}
          loading="eager"
          decoding="async"
          fetchPriority="low"
        />
        <div className={styles.mediaShade} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
      </div>
    </article>
  )
}
