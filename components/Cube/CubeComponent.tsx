import styles from '@/styles/Cube.module.css'
import { useRef } from 'react';
import Link from 'next/link'

export default function CubeCompontent() {   
    const info = useRef<HTMLDivElement>(null);
    let isTextOpen = false;
    
    const hideCubeInfo = () => {
        if (info.current) {
            info.current.style.visibility = 'hidden';
            isTextOpen = false;
        }
    }

    const handleCubeClick = () => {
        if (info.current) {
            info.current.style.visibility = 'visible';
            isTextOpen = true;
            setTimeout(hideCubeInfo, 5000);
        }
    }

    return (
        <>
            <div className={styles.info} ref={info}>        
                <Link href="/Resume">Resume</Link>
            </div>
            <div onClick={handleCubeClick} className={styles.wrapper} ref={cubeWrapper}>
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
