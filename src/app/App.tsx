import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.app}>
      <Suspense fallback={<h2>Loading...</h2>}>
        <h1 className={'visually-hidden'}>test-spetstech-favorit</h1>
        <Outlet />
      </Suspense>
    </div>
  );
}
