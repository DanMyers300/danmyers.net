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
        <p className={styles.experienceTitle}>
            * FW Gasket - ML Engineer (Remote Contract)Mar 2023 - Present
        </p>
        <p>
            Developed custom natural language processing solutions to extract items from RFQ documents and import them into an Access database.
        </p>
        <p>
            Utilized Python libraries like Spacy and Gensim to create custom named entity     recognition models and custom word vectors to train on proprietary data.
        </p>
        <p>
            Ensured best security practices for personal development environment and any linux servers to protect valuable company data.
        </p>
        <p className={styles.experienceTitle}>
            * Musework - Developer (Remote Contract)July 2022 - Present
        </p>
        <p>
            Collaborated with cross-functional teams to design and implement cloud solutions using AWS, ensuring scalability, security, and high availability.
        <p>
        </p>
            Utilized AWS services to develop and maintain an informational chatbot for pa    trons of the Waterloo Greenway Conservatory in Austin, TX
        </p>
        <p>    
            Developed full-stack custom educational websites used by TX teachers and scho    ol children for the client: TXDOT
        </p>
        <p className={styles.experienceTitle}>
             * Emler Swim School - CS Manager (Dallas, TX) Feb 2021 - Mar 2023
        </p>
        <p className={styles.experienceTitle}>
             * H-E-B - Grocery Associate (Austin, TX) May 2016 - May 2020
        </p>
        <hr/>
        <h1 className={styles.resumeTitle}>
            EDUCATION
        </h1>
        <p>
  University of Texas at Dallas - BS Computer Science
  September 2020 - May 2021 (Incomplete)
  Austin Community College - Associates in Business Administration
 September 2016 - May 2018
        </p>
        <hr />
        <h1 className={styles.resumeTitle}>
            SKILLS
        </h1>
        <p>
 30 Excel/Google Sheets • Python • Javascript • Web Frameworks
 31 Linux/Windows OS • AWS/Azure/Google Cloud • Docker/Kubernetes 
        </p>
      </div>
    </main>
  );
}
