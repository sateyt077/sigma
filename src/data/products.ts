import product01 from '../../assets/images/products/product-01.jpg'
import product02 from '../../assets/images/products/product-02.jpg'
import product03 from '../../assets/images/products/product-03.jpg'
import product04 from '../../assets/images/products/product-04.jpg'
import product05 from '../../assets/images/products/product-05.jpg'
import product06 from '../../assets/images/products/product-06.jpg'
import product07 from '../../assets/images/products/product-07.jpg'
import product08 from '../../assets/images/products/product-08.jpg'
import product09 from '../../assets/images/products/product-09.jpg'
import product10 from '../../assets/images/products/product-10.jpg'
import type { Product } from '../components/ui/ProductCard/ProductCard'

/** Unique product image URLs — preload on page load */
export const productImageUrls = [
  product01,
  product02,
  product03,
  product04,
  product05,
  product06,
  product07,
  product08,
  product09,
  product10,
] as const

const DESCRIPTION =
  'Описание Описание Описание Описание Описание Описание Описание'

export type ProductCategory = {
  id: string
  title: string
  products: Product[]
}

export const featuredProducts: Product[] = [
  {
    id: 'featured-1',
    title: 'Прицел Senopex',
    description: DESCRIPTION,
    image: product01,
  },
  {
    id: 'featured-2',
    title: 'Прицел Senopex',
    description: DESCRIPTION,
    image: product02,
  },
  {
    id: 'featured-3',
    title: 'Прицел Senopex',
    description: DESCRIPTION,
    image: product03,
  },
  {
    id: 'featured-4',
    title: 'Прицел Senopex',
    description: DESCRIPTION,
    image: product04,
  },
  {
    id: 'featured-5',
    title: 'Прицел Senopex',
    description: DESCRIPTION,
    image: product05,
  },
]

export const categoryOneProducts: Product[] = [
  {
    id: 'cat1-1',
    title: 'Прицел Senopex',
    description: DESCRIPTION,
    image: product06,
  },
  {
    id: 'cat1-2',
    title: 'Прицел Senopex',
    description: DESCRIPTION,
    image: product07,
  },
  {
    id: 'cat1-3',
    title: 'Прицел Senopex',
    description: DESCRIPTION,
    image: product08,
  },
  {
    id: 'cat1-4',
    title: 'Прицел Senopex',
    description: DESCRIPTION,
    image: product09,
  },
  {
    id: 'cat1-5',
    title: 'Прицел Senopex',
    description: DESCRIPTION,
    image: product10,
  },
]

export const categoryTwoProducts: Product[] = [
  {
    id: 'cat2-1',
    title: 'Прицел Senopex',
    description: DESCRIPTION,
    image: product01,
  },
  {
    id: 'cat2-2',
    title: 'Прицел Senopex',
    description: DESCRIPTION,
    image: product02,
  },
  {
    id: 'cat2-3',
    title: 'Прицел Senopex',
    description: DESCRIPTION,
    image: product03,
  },
  {
    id: 'cat2-4',
    title: 'Прицел Senopex',
    description: DESCRIPTION,
    image: product04,
  },
  {
    id: 'cat2-5',
    title: 'Прицел Senopex',
    description: DESCRIPTION,
    image: product05,
  },
]

export const productCategories: ProductCategory[] = [
  {
    id: 'optics',
    title: 'Оптика',
    products: [
      ...featuredProducts,
      {
        id: 'optics-6',
        title: 'Прицел Senopex',
        description: DESCRIPTION,
        image: product06,
      },
      {
        id: 'optics-7',
        title: 'Прицел Senopex',
        description: DESCRIPTION,
        image: product07,
      },
      {
        id: 'optics-8',
        title: 'Прицел Senopex',
        description: DESCRIPTION,
        image: product08,
      },
      {
        id: 'optics-9',
        title: 'Прицел Senopex',
        description: DESCRIPTION,
        image: product09,
      },
      {
        id: 'optics-10',
        title: 'Прицел Senopex',
        description: DESCRIPTION,
        image: product10,
      },
    ],
  },
  {
    id: 'thermal',
    title: 'Тепловизоры',
    products: [
      ...categoryOneProducts,
      {
        id: 'thermal-6',
        title: 'Прицел Senopex',
        description: DESCRIPTION,
        image: product01,
      },
      {
        id: 'thermal-7',
        title: 'Прицел Senopex',
        description: DESCRIPTION,
        image: product02,
      },
      {
        id: 'thermal-8',
        title: 'Прицел Senopex',
        description: DESCRIPTION,
        image: product03,
      },
      {
        id: 'thermal-9',
        title: 'Прицел Senopex',
        description: DESCRIPTION,
        image: product04,
      },
      {
        id: 'thermal-10',
        title: 'Прицел Senopex',
        description: DESCRIPTION,
        image: product05,
      },
    ],
  },
  {
    id: 'equipment',
    title: 'Оборудование',
    products: [
      ...categoryTwoProducts,
      {
        id: 'equip-6',
        title: 'Прицел Senopex',
        description: DESCRIPTION,
        image: product06,
      },
      {
        id: 'equip-7',
        title: 'Прицел Senopex',
        description: DESCRIPTION,
        image: product07,
      },
      {
        id: 'equip-8',
        title: 'Прицел Senopex',
        description: DESCRIPTION,
        image: product08,
      },
      {
        id: 'equip-9',
        title: 'Прицел Senopex',
        description: DESCRIPTION,
        image: product09,
      },
      {
        id: 'equip-10',
        title: 'Прицел Senopex',
        description: DESCRIPTION,
        image: product10,
      },
    ],
  },
]

export const allProducts: Product[] = productCategories.flatMap(
  (category) => category.products,
)
