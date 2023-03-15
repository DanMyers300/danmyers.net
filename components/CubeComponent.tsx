import styles from '@/styles/Cube.module.css'

export default function CubeCompontent() {   
    
    function handleCubeClick() {
        const info = document.getElementById('toggle') as HTMLDivElement;
        console.log(info);
    }
    
    if (typeof document !== 'undefined') {
    const CubeClick= document.getElementById('cubewrapper') as HTMLDivElement;
    CubeClick?.addEventListener('click', () => {
        handleCubeClick();
    })
    }

    return (
        <div className={styles.wrapper} id="cubewrapper">
            <div className={styles.info} id="toggle">
                <p>
                    Hello World!
                </p>
            </div>
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