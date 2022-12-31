import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> INTRODUCTION </span>
            </h1>
            <p className="home-about-body">
            I am a young full-stack cloud engineer and web developer. I have a strong passion for technology and have been working in the tech industry for a few years now.
              <br />
              <br />I am skilled in a variety of programming languages including:
              <i>
                <b className="purple"> Javascript and Python. </b>
              </i>
              <br />
              <br />
              I am also well-versed in cloud computing platforms such as &nbsp;
              <i>
                <b className="purple">AWS and Azure</b> </i> and
                I have experience with both{" "}
                <i>
                <b className="purple">
                infrastructure as a service (IaaS) and platform as a service (PaaS).
                </b>
              </i>
              <br />
              <br />
              am a strong problem-solver and have  
              excellent <b className="purple">communication</b> and
              <i>
                <b className="purple">
                  {" "}
                  collaboration skills.
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Team Management</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>--------------------------------------</h1>
            <p>
              <span className="purple">Connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Colloke/danmyers.net"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dangandolf"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
