import styles from '@/styles/Header.module.css'
import Link from 'next/link'

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Nav</h1>
            <p className={styles.description}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/Projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </p>
        </header>
    )
}