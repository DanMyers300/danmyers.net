import styles from '@/styles/Cube.module.css'
import Link from 'next/link';

export default function CubeInfo() {
    return (
        <div className={styles.info} id="cubeText">
            <p className={styles.infoText} id="cubeTextBody">
            <Link href="/Resume">CUBE</Link>
            </p>
        </div>
    )
}