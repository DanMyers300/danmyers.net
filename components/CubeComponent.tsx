import styles from '@/styles/Cube.module.css'

export default function CubeCompontent() {
    if (typeof document !== 'undefined') {
    const CubeClick= document.getElementById('cubewrapper') as HTMLDivElement;
    CubeClick?.addEventListener('click', () => {
        console.log('click');
    });
    }

    return (
        <div className={styles.wrapper} id="cubewrapper">
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
    )
}