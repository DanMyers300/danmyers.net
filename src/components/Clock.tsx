import React from "react";
import styles from '@/styles/Clock.module.css'

export const Clock = () => {

    function setDate() {
        const now = new Date();
        
        // Seconds
        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        // For some reason this code bricks the other pages if they don't have the clock element, I think it has to do with as HTMLElement
        const secondHand = document.querySelector(`.${styles.secondHand}`) as HTMLElement;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        // This is to prevent the second hand from snapping back to 0 when seconds=60
        if (
            secondsDegrees === 90 ||
            secondsDegrees === 444
        ) {
            secondHand.style.transition = 'none';
        }
        
        // // Minutes
        // const mins = now.getMinutes();
        // const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
        // const minHand = document.querySelector(`.${styles.minHand}`) as HTMLElement;
        // minHand.style.transform = `rotate(${minsDegrees}deg)`;
        
        // // Hours
        // const hour = now.getHours();
        // const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
        // const hourHand = document.querySelector(`.${styles.hourHand}`) as HTMLElement;
        // hourHand.style.transform = `rotate(${hourDegrees}deg)`;        
    }
    setInterval(setDate, 1000);

    return (
    <div className={styles.clock}>
        <div className={styles.clockFace}>
            <div className={styles.clockMiddle}></div>
            <div className={`${styles.hand} ${styles.hourHand}`}></div>
            {/* <div className={`${styles.hand} ${styles.minHand}`}></div>
            <div className={`${styles.hand} ${styles.secondHand}`}></div> */}
        </div>
    </div>
    );
};

/*

TODO:

2) Figure out as HTMLElement so that it doesn't brick the other pages

*/