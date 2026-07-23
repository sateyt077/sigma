import { useEffect } from 'react'
import { Contact } from '../components/sections/Contact/Contact'
import { ProductsCatalog } from '../components/sections/ProductsCatalog/ProductsCatalog'
import { Reveal } from '../components/ui/Reveal/Reveal'

export function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <ProductsCatalog />
      <Reveal
        trigger="mount"
        delay="calc(var(--intro-header-delay) + 0.48s)"
      >
        <Contact />
      </Reveal>
    </main>
  )
}
