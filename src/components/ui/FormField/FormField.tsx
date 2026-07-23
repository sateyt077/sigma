import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import styles from './FormField.module.css'

type FieldBaseProps = {
  label: string
  id: string
}

type TextFieldProps = FieldBaseProps &
  InputHTMLAttributes<HTMLInputElement> & {
    multiline?: false
  }

type TextAreaFieldProps = FieldBaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    multiline: true
  }

export function FormField(props: TextFieldProps | TextAreaFieldProps) {
  const { label, id, multiline, className, ...rest } = props

  return (
    <label className={[styles.field, className].filter(Boolean).join(' ')} htmlFor={id}>
      <span className={styles.label}>{label}</span>
      {multiline ? (
        <textarea
          id={id}
          className={[styles.control, styles.textarea].join(' ')}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          className={[styles.control, styles.input].join(' ')}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </label>
  )
}
