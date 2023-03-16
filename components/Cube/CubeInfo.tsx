import styles from '@/styles/Cube.module.css'
import Link from 'next/link'

export default function CubeInfo() {   
    return (
        <div className={styles.info} id="cubeText">        
            <Link href="/Resume">Resume</Link>
        </div>
    )
}