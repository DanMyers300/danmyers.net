import styles from '@/styles/Cube.module.css'

export default function CubeCompontent() {
    return (
        <div className={styles.cube}>
            <div className={`${styles.face} ${styles.face1}`}>Front</div>
            <div className={`${styles.face} ${styles.face2}`}>Back</div>
            <div className={`${styles.face} ${styles.face3}`}>Right</div>
            <div className={`${styles.face} ${styles.face4}`}>Left</div>
            <div className={`${styles.face} ${styles.face5}`}>Top</div>
            <div className={`${styles.face} ${styles.face6}`}>Bottom</div>
        </div>
    )
}