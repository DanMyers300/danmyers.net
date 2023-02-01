import styles from '@/styles/Footer.module.css'

export const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <footer className={styles.footer}>
            <p className={styles.description}>
                © {year} Dan Myers
            </p>
        </footer>
    )
}
