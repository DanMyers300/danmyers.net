import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
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
  "https://github.com/Colloke"

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
            I am a young cloud engineer and full-stack web developer. I have a strong passion for technology.
              <br />
              <br />I am skilled in a variety of programming languages including:
              <i>
                <b className="purple"> Javascript and Python. </b>
              </i>
              <br />
              <br />
              I am also well-versed in cloud computing platforms such as&nbsp;
              <i>
                <b className="purple">AWS and Google Cloud</b> </i>
                I have experience with both{" "}
                <i>
                <b className="purple">
                Business Management and Information Technology
                </b>
              </i>
              <br />
              <br />
              I am a strong problem-solver and have  
              excellent <b className="purple">productivity</b> and
              <i>
                <b className="purple">
                  {" "}
                  collaboration skills
                </b>
              </i>
              &nbsp; like 
              <i>
                <b className="purple"> communication</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={avatar} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>--------------------------------------</h1>
            <p>
              <span className="purple">Social</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={ghlink}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={linkedinlink}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={instalink}
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
