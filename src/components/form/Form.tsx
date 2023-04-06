import { ReactNode } from 'react';
import styles from './Form.module.css';

type Props = {
  children: ReactNode;
};

export function Form({ children }: Props) {
  return <form className={styles.form}>{children}</form>;
}
