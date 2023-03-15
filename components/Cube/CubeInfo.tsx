import styles from '@/styles/Cube.module.css'
import Link from 'next/link';

export default function CubeInfo() {
    return (
        <div className={styles.info} id="cubeText">
            <p className={styles.infoText} id="cubeTextBody">
            <Link href="/Resume">CUBE</Link> {/* When you go to the resume page and then hit back it breaks the cube listeners */}
            </p>
        </div>
    )
}