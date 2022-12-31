import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">Daniel Myers </span>
            from <span className="purple"> Austin, Texas.</span>
            <br /> I like coding
            <br />
            <br />
            Some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The only way to do great work is to be passionate about what you do. <span className="purple">Don't settle for mediocrity – always strive for excellence." </span> {" "}
          </p>
          <footer className="blockquote-footer">Dan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
