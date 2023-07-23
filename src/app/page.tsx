import styles from './page.module.css';
 
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p className={styles.myTitle}>
            Dan_Myers.net
        </p>
        <p className={styles.contactInformation}>
            Contact@danmyers.net
            <br />
            (469) 847-9401
            <br />
        </p>
      </div>
      <hr />
      <div className={styles.aboutMe}>
        <h1 className={styles.resumeTitle}>
        EXPERIENCE
        </h1>
        <hr/>
        <h1 className={styles.resumeTitle}>
            EDUCATION
        </h1>
        <p>
            University of Texas at Dallas - BS Computer Science
            <br/>&nbsp;&nbsp;
            September 2020 - May 2021 (Incomplete)
        </p>
        <p>
            Austin Community College - Associates in Business Administration
            <br/>&nbsp;&nbsp;
            September 2016 - May 2018
        </p>
        <hr />
      </div>
    </main>
  );
}
