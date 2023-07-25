import Link from 'next/link';
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Q Car</h2>
          <p>NEW DEFINE OF LUXURY</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        FIND YOUR DREAM CAR WITH US &copy;
      </footer>
    </>
  );
}

export default Layout;
