import { Hero } from '../components/sections/Hero/Hero'
import { Partners } from '../components/sections/Partners/Partners'
import { Products } from '../components/sections/Products/Products'
import { About } from '../components/sections/About/About'
import { Faq } from '../components/sections/Faq/Faq'
import { Contact } from '../components/sections/Contact/Contact'
import { Reveal } from '../components/ui/Reveal/Reveal'

export function HomePage() {
  return (
    <main>
      <Hero />
      <Reveal>
        <Partners />
      </Reveal>
      <Reveal>
        <Products />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </main>
  )
}
