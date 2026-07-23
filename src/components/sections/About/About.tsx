import starIcon from '../../../assets/icons/star.svg'
import { AdvantageCard } from '../../ui/AdvantageCard/AdvantageCard'
import { Button } from '../../ui/Button/Button'
import { SectionBadge } from '../../ui/SectionBadge/SectionBadge'
import styles from './About.module.css'

const ADVANTAGES = [
  {
    id: 'contracts',
    title: 'Прямые контракты с производителями',
    description: (
      <>
        Работаем напрямую с иностранными заводами
        <br />— без лишних посредников
      </>
    ),
    wide: false,
  },
  {
    id: 'delivery',
    title: 'Поставки в срок',
    description: 'Соблюдаем сроки даже при санкционных ограничениях',
    wide: true,
  },
  {
    id: 'warranty',
    title: 'Гарантия от производителя',
    description:
      'Полное гарантийное обслуживание по условиям завода-изготовителя',
    wide: true,
  },
  {
    id: 'experience',
    title: 'Опыт с госкорпорациями',
    description: (
      <>
        Успешные проекты с «Ростех», «Росатом»,
        <br />
        «Алмаз-Антей», включая ГОЗ
      </>
    ),
    wide: false,
  },
] as const

export function About() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <div className={styles.header}>
        <div className={styles.titleBlock}>
          <SectionBadge iconSrc={starIcon}>О компании</SectionBadge>
          <div className={styles.titles}>
            <h2 id="about-title" className={styles.title}>
              Не просто магазин.
            </h2>
            <p className={styles.subtitle}>А целое решение для бизнеса.</p>
          </div>
        </div>

        <Button variant="primary" href="#contacts">
          Связаться сейчас
        </Button>
      </div>

      <div className={styles.grid}>
        {ADVANTAGES.map((item) => (
          <AdvantageCard
            key={item.id}
            title={item.title}
            description={item.description}
            wide={item.wide}
            className={styles[item.id]}
          />
        ))}
      </div>
    </section>
  )
}
