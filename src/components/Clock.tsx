import React from "react";
import styles from '@/styles/Clock.module.css'

export const Clock = () => {

    function setDate() {
        const now = new Date();
        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        const secondHand = document.querySelector(`.${styles.secondHand}`) as HTMLElement;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    }

    setInterval(setDate, 1000);
    return (
    <div className={styles.clock}>
        <div className={styles.clockFace}>
            <div className={`${styles.hand} ${styles.hourHand}`}></div>
            <div className={`${styles.hand} ${styles.minHand}`}></div>
            <div className={`${styles.hand} ${styles.secondHand}`}></div>
        </div>
    </div>
    );
};