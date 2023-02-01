import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import styles from '@/styles/Footer.module.css';

const instalink =
  "https://www.instagram.com/dangandolf"

const linkedinlink =
  "https://www.linkedin.com/in/danpmyers"

const ghlink =
  "https://github.com/Colloke/danmyers.net"

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className={styles.footer}>
      <Row>
        <Col md="4" className={styles.footerName}>
          <h3>Daniel Myers</h3>
        </Col>
        <Col md="4" className={styles.footerYear}>
          <h3>{year}</h3>
        </Col>
        <Col md="4" className={styles.footerBody}>
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
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
