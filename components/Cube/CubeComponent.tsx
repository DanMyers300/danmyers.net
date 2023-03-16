import styles from '@/styles/Cube.module.css'
import Link from 'next/link'
import CubeLogic from './CubeLogic'

export default function CubeCompontent() {
    const { handleCubeClick, handleCubeHover, endCubeHover, info } = CubeLogic();
    return (
        <>
            <div className={styles.info} ref={info}>
                <Link href="/Resume">Resume</Link>
            </div>
            <div onClick={handleCubeClick} onMouseEnter={handleCubeHover} onMouseLeave={endCubeHover} className={styles.wrapper}>
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
