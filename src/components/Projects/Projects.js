import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import HEB from "../../Assets/Projects/HEB.png";
import WaterlooGreenway from "../../Assets/Projects/Waterloo-Greenway-Conservancy.png";
import suicide from "../../Assets/Projects/suicide.png";
import Emler from "../../Assets/Projects/Emler.png";

const danghlink =
  "https://github.com/Colloke";

const whghlink =
  "https://github.com/Colloke/WaterlooGreenwayChatbot"

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
              description="Informational chatbot for Waterloo-greenway conservatory in Austin, TX. Coversational chatbot using AWS Lambda and Lex."
              ghLink={whghlink}
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Emler}
              isBlog={false}
              title="Emler Swim School"
              description="Automated front desk processes"
              ghLink={danghlink}
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HEB}
              isBlog={false}
              title="H-E-B"
              description="Grocery Operative"
              ghLink={danghlink}
              demoLink=""             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Placeholder"
              description="Placeholder"
              ghLink={danghlink}
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Placeholder"
              description="Placeholder"
              ghLink={danghlink}
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Placeholder"
              description="Placeholder"
              ghLink={danghlink}
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
