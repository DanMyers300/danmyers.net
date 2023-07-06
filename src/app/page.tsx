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
        <p>
        EXPERIENCE                                                                       
  * FW Gasket - ML Engineer (Remote Contract)                              Mar 2023     - Present
  7 * Developed custom natural language processing solutions to extract items from RF    Q documents and import them into an Access database.
  8 * * Utilized Python libraries like Spacy and Gensim to create custom named entity     recognition models and custom word vectors to train on proprietary data.
  9 * * Ensured best security practices for personal development environment and comp    any linux servers to protect valuable company data.
        </p>
        <p>
        * Musework - Developer (Remote Contract)                              July 2022 -     Present
 13 * Collaborated with cross-functional teams to design and implement cloud solution    s using AWS, ensuring scalability, security, and high availability.
 14 * * Utilized AWS services to develop and maintain an informational chatbot for pa    trons of the Waterloo Greenway Conservatory in Austin, TX
 15 * * Developed full-stack custom educational websites used by TX teachers and scho    ol children for the client: TXDOT
        </p>
        <p>
             * Emler Swim School - CS Manager (Dallas, TX)                                Feb     2021 - Mar 2023
 19 * H-E-B - Grocery Associate (Austin, TX)                                    May 2    016 - May 2020
        </p>
        <hr/>
        <p>
            EDUCATION
 23 University of Texas at Dallas - BS Computer Science
 24 September 2020 - May 2021 (Incomplete)
 25 Austin Community College - Associates in Business Administration
26 September 2016 - May 2018
        </p>
        <hr />
        <p>
            SKILLS
 30 Excel/Google Sheets • Python • Javascript • Web Frameworks
 31 Linux/Windows OS • AWS/Azure/Google Cloud • Docker/Kubernetes 
        </p>
      </div>
    </main>
  );
}
