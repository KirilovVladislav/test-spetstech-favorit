import { FormEvent } from 'react';
import styles from './Button.module.css';

type Props = {
  type?: 'submit' | 'button' | 'reset';
  secondary?: boolean;
  handler: (evt: FormEvent) => void;
  children: string;
};

export function Button({
  type = 'button',
  secondary = false,
  handler,
  children,
}: Props) {
  return (
    <button
      className={`${styles.button} ${secondary && styles.secondary}`}
      type={type}
      onClick={handler}
    >
      <span className={styles.text}>{children}</span>
    </button>
  );
}
