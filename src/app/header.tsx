import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="Dan Myers" />
      </div>
      <div className={styles.titleWrapper}>
        <h1 className={styles.hTitle}>Resume</h1>
      </div>
    </header>
  );
};

export default Header;
