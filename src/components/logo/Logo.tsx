import logo from '@/assets/img/logo.svg';
import styles from './Logo.module.css';

export function Logo() {
  return <img className={styles.logo} src={logo} alt={'logo'} />;
}
