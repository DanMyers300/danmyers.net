import styles from '@/styles/Home.module.css'

export const Home = () => {
    return (
        <div className={styles.container}>
        <h1 className={styles.title}>Hello</h1>
        <p className={styles.description}>
            Welcome to 
            <br /> 
            <code className={styles.code}>DanMyers.net</code>
        </p>
        </div>
    )
    }