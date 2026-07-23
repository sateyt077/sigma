import { ProductCard } from '../../ui/ProductCard/ProductCard'
import { SectionBadge } from '../../ui/SectionBadge/SectionBadge'
import { Reveal } from '../../ui/Reveal/Reveal'
import { productCategories } from '../../../data/products'
import styles from './ProductsCatalog.module.css'

export function ProductsCatalog() {
  const total = productCategories.reduce(
    (sum, category) => sum + category.products.length,
    0,
  )

  return (
    <section
      className={styles.catalog}
      id="products"
      aria-labelledby="catalog-title"
    >
      <Reveal trigger="mount" delay="var(--intro-header-delay)">
        <div className={styles.header}>
          <div className={styles.titleBlock}>
            <SectionBadge>Товары</SectionBadge>
            <div className={styles.titles}>
              <h1 id="catalog-title" className={styles.title}>
                Все товары.
              </h1>
              <p className={styles.subtitle}>Для лучших клиентов.</p>
            </div>
          </div>
          <p className={styles.count}>{total} позиций</p>
        </div>
      </Reveal>

      <div className={styles.categories}>
        {productCategories.map((category, index) => (
          <Reveal
            key={category.id}
            trigger="mount"
            delay={`calc(var(--intro-header-delay) + ${(index + 1) * 0.12}s)`}
          >
            <div className={styles.category} id={category.id}>
              <h2 className={styles.categoryTitle}>{category.title}</h2>
              <div className={styles.grid}>
                {category.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
