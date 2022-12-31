import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import WaterlooGreenway from "../../Assets/Projects/Waterloo-Greenway-Conservancy.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          ----------------------------------
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WaterlooGreenway}
              isBlog={false}
              title="Waterloo-Greenway SMS Chatbot"
              description="Informational chatbot for Waterloo-greenway conservatory in Austin, TX.           Used AWS Lambda and Lex to make a coversational chatbot."
              ghLink="https://github.com/Colloke/WaterlooGreenwayChatbot"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Placeholder"
              description="Placeholder"
              ghLink="https://github.com/Colloke/danmyers.net"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Placeholder"
              description="Placeholder"
              ghLink="https://github.com/Colloke/danmyers.net"
              demoLink=""             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Placeholder"
              description="Placeholder"
              ghLink="https://github.com/Colloke/danmyers.net"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Placeholder"
              description="Placeholder"
              ghLink="https://github.com/Colloke/danmyers.net"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Placeholder"
              description="Placeholder"
              ghLink="https://github.com/Colloke/danmyers.net"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
