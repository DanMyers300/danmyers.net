import styles from '@/styles/Cube.module.css'
import { useRef } from 'react';
import Link from 'next/link'

export default function CubeCompontent() {   
    const info = useRef<HTMLDivElement>(null);
    
    const hideCubeInfo = () => {
        if (info.current) {
            info.current.style.visibility = 'hidden';
        }
    }

    const handleCubeHover = () => {
        if (info.current) {
            info.current.style.visibility = 'visible';
        }
    }

    const handleCubeClick = () => {
        if (info.current) {
            info.current.style.visibility = 'visible';
            setTimeout(hideCubeInfo, 5000);
        }
    }

    return (
        <>
            <div className={styles.info} ref={info}>        
                <Link href="/Resume">Resume</Link>
            </div>
            <div onClick={handleCubeClick} onMouseEnter={handleCubeHover} className={styles.wrapper}>
                <div className={styles.poswrap}>
                    <div className={styles.floatwrap}>
                        <div className={styles.spinwrap}>
                            <div className={styles.tran1}>
                                <div className={styles.tran2}>
                                    <div className={styles.cube}>
                                        <div className={styles.cube_face}>
                                        </div>
                                        <div className={styles.cube_face}>
                                        </div>
                                        <div className={styles.cube_face}>
                                        </div>
                                        <div className={styles.cube_face}>
                                        </div>
                                        <div className={styles.cube_face}>
                                        </div>
                                        <div className={styles.cube_face}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
