import styles from '@/styles/Header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Danmyers.net</h1>
            <p className={styles.description}>
                Hello
            </p>
        </header>
    )
}