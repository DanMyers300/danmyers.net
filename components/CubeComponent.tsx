import styles from '@/styles/Cube.module.css'

export default function CubeCompontent() {   

    if (typeof document !== 'undefined') { // Required by Typescript

        const cubeWrapper= document.getElementById('cubewrapper') as HTMLDivElement;
        const info = document.getElementById('cubeText') as HTMLDivElement;
        let isTextOpen = false;

        cubeWrapper?.addEventListener('click', () => {
            handleCubeClick();
        });

        const hideCube = () => {
            info.style.visibility = 'hidden';
            isTextOpen = false;
        }

        const handleCubeClick = () => {
            info.style.visibility = 'visible';
            isTextOpen = true;
            setTimeout(hideCube, 5000);
        }

        cubeWrapper?.addEventListener('mouseover', () => {info.style.visibility = 'visible';});
        cubeWrapper?.addEventListener('mouseout', () => {
            if (isTextOpen === false){info.style.visibility = 'hidden'};
        });
    }

    return (
        <>
            <div className={styles.info} id="cubeText">
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