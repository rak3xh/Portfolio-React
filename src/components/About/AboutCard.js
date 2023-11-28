import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rakesh Mondal </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />
            I have recently completed my Post-graduation and want to start a career in thr field of Computer Science.
            <br />
            <br />
            I develop wesites and simple minimalistic games.
            <br />
            <br/>
            I have completed MSc in Computer Science at VU West Bengal.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Your limit is your imagination!"{" "}
          </p>
          <footer className="blockquote-footer">Rakesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
