import React from "react";
import styles from '@/styles/Clock.module.css'

export const Clock = () => {
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