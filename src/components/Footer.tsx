import styles from '@/styles/Footer.module.css'
import {
    AiFillGithub,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";

const instalink =
  "https://www.instagram.com/dangandolf"

const linkedinlink =
  "https://www.linkedin.com/in/danpmyers"

const ghlink =
  "https://github.com/DanMyers300/danmyers.net"

export const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <footer className={styles.footer}>
            <p className={styles.year}>
                © {year}
            </p>
            <p className={styles.name}>
                Dan Myers
            </p>
            <ul className={styles.footerIcons}>
                <li className={styles.socialIcons}>
                    <a
                        href={ghlink}
                        style={{ color: "white" }}
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                        <AiFillGithub />
                    </a>
                </li>
                <li className={styles.socialIcons}>
                    <a
                          href={linkedinlink}
                          style={{ color: "white" }}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                        <FaLinkedinIn />
                    </a>
                </li>
                <li className={styles.socialIcons}>
                    <a
                          href={instalink}
                          style={{ color: "white" }}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <AiFillInstagram />
                    </a>
                </li>
            </ul>
        </footer>
    )
}
