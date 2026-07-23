import { Button } from '../../ui/Button/Button'
import { ProductCard, type Product } from '../../ui/ProductCard/ProductCard'
import { SectionBadge } from '../../ui/SectionBadge/SectionBadge'
import {
  categoryOneProducts,
  categoryTwoProducts,
  featuredProducts,
} from '../../../data/products'
import styles from './Products.module.css'

function ProductRow({ products }: { products: Product[] }) {
  return (
    <div className={styles.row}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

function CategoryBlock({
  title,
  products,
}: {
  title: string
  products: Product[]
}) {
  return (
    <div className={styles.category}>
      <div className={styles.categoryHeader}>
        <h3 className={styles.categoryTitle}>{title}</h3>
        <Button variant="secondary" href="/products">
          Смотреть все
        </Button>
      </div>
      <ProductRow products={products} />
    </div>
  )
}

export function Products() {
  return (
    <section
      className={styles.products}
      id="products"
      aria-labelledby="products-title"
    >
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.titleBlock}>
            <SectionBadge>Товары</SectionBadge>
            <div className={styles.titles}>
              <h2 id="products-title" className={styles.title}>
                Наши товары.
              </h2>
              <p className={styles.subtitle}>Для лучших клиентов.</p>
            </div>
          </div>
          <Button variant="secondary" href="/products">
            Смотреть все
          </Button>
        </div>

        <ProductRow products={featuredProducts} />
      </div>

      <CategoryBlock title="Категория 1" products={categoryOneProducts} />
      <CategoryBlock title="Категория 2" products={categoryTwoProducts} />
    </section>
  )
}
