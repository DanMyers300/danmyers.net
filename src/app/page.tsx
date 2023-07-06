import styles from './page.module.css';
 
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcome to Dan&apos;s Website!
        </p>
      </div>
      <div className={styles.aboutMe}> 
        <p>
          I&apos;m Daniel Myers, a machine learning engineer and developer based in Texas. I specialize in creating innovative solutions and seamless user experiences.
        </p>
        <p>
Currently, I work as a Machine Learning Engineer at FW Gasket and Supply, where I develop custom natural language processing solutions. Previously, I worked as a Developer at Musework, collaborating on cloud solutions and creating educational websites.
        </p>
        <p>
I hold a Bachelor&apos;s degree in Computer Science from the University of Texas at Dallas and an Associate&apos;s degree in Business Administration from Austin Community College.
        </p>
        <p>
I have expertise in Python, JavaScript, web frameworks, AWS, Azure, Google Cloud, Docker, and Kubernetes. I am dedicated to delivering high-quality results and thrive in dynamic, collaborative environments.
        </p>
      </div>
    </main>
  );
}
