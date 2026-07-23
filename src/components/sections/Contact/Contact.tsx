import type { FormEvent } from 'react'
import letterIcon from '../../../assets/icons/letter-opened.svg'
import { Button } from '../../ui/Button/Button'
import { FormField } from '../../ui/FormField/FormField'
import { SectionBadge } from '../../ui/SectionBadge/SectionBadge'
import styles from './Contact.module.css'

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section
      className={styles.contact}
      id="contacts"
      aria-labelledby="contact-title"
    >
      <div className={styles.aside}>
        <SectionBadge iconSrc={letterIcon}>Связаться</SectionBadge>
        <h2 id="contact-title" className={styles.title}>
          Оставьте заявку прямо сейчас.
        </h2>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.grid}>
          <FormField
            id="contact-name"
            label="Имя"
            name="name"
            type="text"
            placeholder="Ваше имя"
            autoComplete="given-name"
          />
          <FormField
            id="contact-surname"
            label="Фамилия"
            name="surname"
            type="text"
            placeholder="Ваша фамилия"
            autoComplete="family-name"
          />
          <FormField
            id="contact-email"
            label="Почта"
            name="email"
            type="email"
            placeholder="Электронный адрес"
            autoComplete="email"
          />
          <FormField
            id="contact-phone"
            label="Телефон"
            name="phone"
            type="tel"
            placeholder="Номер телефона"
            autoComplete="tel"
          />
        </div>

        <div className={styles.bottom}>
          <FormField
            id="contact-message"
            label="Сообщение"
            name="message"
            multiline
            placeholder={
              'Что вас интересует?\nНапример: оптовая стоимость для лазеров Senopex'
            }
          />

          <Button type="submit" variant="primary" className={styles.submit}>
            Отправить заявку
          </Button>
        </div>
      </form>
    </section>
  )
}
