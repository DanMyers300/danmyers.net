import styles from '@/styles/Header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Nav</h1>
            <p className={styles.description}>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
            </p>
        </header>
    )
}