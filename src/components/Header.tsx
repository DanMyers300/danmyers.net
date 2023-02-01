import styles from '@/styles/Header.module.css'
import Link from 'next/link'

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Nav</h1>
            <p className={styles.description}>
                <Link className={styles.navLink} href="/">Home</Link>
                <Link className={styles.navLink} href="/about">About</Link>
                <Link className={styles.navLink} href="/Projects">Projects</Link>
                <Link className={styles.navLink} href="/contact">Contact</Link>
            </p>
        </header>
    )
}