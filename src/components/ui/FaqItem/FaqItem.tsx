import { useId, useState } from 'react'
import plusIcon from '../../../assets/icons/plus-sign.svg'
import styles from './FaqItem.module.css'

export type FaqItemData = {
  id: string
  question: string
  answer: string
}

type FaqItemProps = {
  item: FaqItemData
  isOpen: boolean
  onToggle: () => void
}

export function FaqItem({ item, isOpen, onToggle }: FaqItemProps) {
  const panelId = useId()
  const buttonId = useId()

  return (
    <div className={[styles.item, isOpen ? styles.open : ''].filter(Boolean).join(' ')}>
      <button
        id={buttonId}
        type="button"
        className={styles.trigger}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className={styles.question}>{item.question}</span>
        <span className={styles.icon} aria-hidden>
          <img src={plusIcon} alt="" width={24} height={24} />
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={styles.panel}
      >
        <div className={styles.panelInner}>
          <p className={styles.answer}>{item.answer}</p>
        </div>
      </div>
    </div>
  )
}

type FaqListProps = {
  items: FaqItemData[]
  defaultOpenId?: string | null
}

export function FaqList({ items, defaultOpenId = null }: FaqListProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId)

  return (
    <div className={styles.list}>
      {items.map((item) => (
        <FaqItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() =>
            setOpenId((current) => (current === item.id ? null : item.id))
          }
        />
      ))}
    </div>
  )
}
