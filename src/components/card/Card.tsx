import { ReactNode } from 'react';
import styles from './Card.module.css';

type Props = {
  children: ReactNode;
};

export function Card({ children }: Props) {
  return <div className={styles.card}>{children}</div>;
}
