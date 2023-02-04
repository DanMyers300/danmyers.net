import styles from '@/styles/Header.module.css'
import Link from 'next/link'

export const Header = () => {

    return (
        <header className={styles.header}>
            <p className={styles.titleContainer}>
                <Link href="/">
                <img className={styles.logo} src='/logo.png'/>
                </Link>
            </p>
            <ul className={styles.description}>
                <Link className={styles.navLink} href="/about">About</Link>
                <Link className={styles.navLink} href="/projects">Projects</Link>
                <Link className={styles.navLink} href="/contact">Contact</Link>
            </ul>
        </header>
    )
}