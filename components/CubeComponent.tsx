import styles from '@/styles/Cube.module.css'

export default function CubeCompontent() {   
    
    function handleCubeClick() {
        const info = document.getElementById('toggle') as HTMLDivElement;
        info.style.visibility = 'visible';
    }
    function hideCubeClick() {
        const info = document.getElementById('toggle') as HTMLDivElement;
        info.style.visibility = 'hidden';
    }

    if (typeof document !== 'undefined') {
    const CubeClick= document.getElementById('cubewrapper') as HTMLDivElement;
    CubeClick?.addEventListener('click', () => {
        handleCubeClick();
    })
    setTimeout(hideCubeClick, 2000);
}

    return (
        <>
            <div className={styles.info} id="toggle">
                <p>
                    ~ CUBE ~
                </p>
            </div>
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
        </>
    )
}