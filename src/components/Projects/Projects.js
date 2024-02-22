import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import or2s from "../../Assets/Projects/1.png";
import ttt from "../../Assets/Projects/2.png";
import qr from "../../Assets/Projects/3.png";
import love from "../../Assets/Projects/4.png";
import port from "../../Assets/Projects/5.png";
import dict from "../../Assets/Projects/6.png";
import ispo from "../../Assets/Projects/7.png";
import weath from "../../Assets/Projects/8.png";
import human from "../../Assets/Projects/9.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={or2s}
              isBlog={false}
              title="OR2S"
              description="Online Railway Reservation System made in Html CSS and Js and back-end using php and MYSQL, with features like seamless UI, Multilinguality, Voice to Search option and many more. Non Connecting train paths and minimum time calculated using different algorithms like BFS and DFS. "
              ghLink="https://github.com/rak3xh/or2s-project"
              demoLink="https://rak3xh.github.io/or2s-project/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={human}
              isBlog={false}
              title="HumanKill3rs-FPS-Game"
              description="Humankill3rs is a 2-D First Person Shooter Game made using C++ Allegro Library and integrated in Qt Developer Studio using CMake. It has high mouse presision and all uncapped FPS which can go upto 1400. It is developed only for windows platform as a console application. "
              ghLink="https://github.com/rak3xh/Humankill3rs-Fps-game"
              demoLink="https://rak3xh.github.io/Humankill3rs-Fps-game/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ispo}
              isBlog={false}
              title="Music-Player-by-rak3xh"
              description="A Web apllication developed for listening music according to your playlist with all the music control features. The website is responsive for all platform devices and can dynamically fetch and play songs that are stored in the libraries without the use of any traditional database system."
              ghLink="https://github.com/rak3xh/Music-Player-By-rak3xh"
              demoLink="https://music-player-by-rak3xh.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={love}
              isBlog={false}
              title="Love-Link"
              description="A web application that leverages pure WebRTC protocal, Google Firestore as a signaling server, and Chromium Tab sharing protocal to allow screen sharing with audio, which enable the ability for folks to catch up and enjoy music and videos together despite the distance."
              ghLink="https://github.com/rak3xh/love-link"
              demoLink="https://love-link.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dict}
              isBlog={false}
              title="Dictionary-n-Pronouncer"
              description="A Web apllication developed to work as a dictionary and prouncer for any meaningful word in English Vocabulary, day and night mode features are also given. "
              ghLink="https://github.com/rak3xh/Dictionary-n-Pronouncer"
              demoLink="https://incredible-torrone-c19f4f.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weath}
              isBlog={false}
              title="Know-The-Weather"
              description="A Web apllication developed to show the weather of a city which is located anywhere in the world alongside with next seven days forecasting ability and all the necessary details like UV Index, AQI Index, etc. "
              ghLink="https://github.com/rak3xh/know-the-weather"
              demoLink="https://know-the-weather-rak3xh.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Portfolio Website"
              description="It is a portfolio website designed for web developers to showcase their projects to tell about themselves and if anyone wants to hire them."
              ghLink="https://github.com/rak3xh/Portfolio-React"
              demoLink="https://rak3xh-portfolio.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ttt}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="It is a Tic-Tac-Toe game website specially designed for its unique interface and 2 mode playing options(either vs Computer or vs Player.It is developed using HTML,CSS,Js"
              ghLink="https://github.com/rak3xh/tic-tac-toe-game"
              demoLink="https://tic-tac-toe-game-ashen-two.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qr}
              isBlog={false}
              title="Interactive-Payment QR code"
              description="Nowadays almost every shop and almost everyone is using UPI. This Website is Designed to make the qr code of any payment app Interactive and pretty to watch. "
              ghLink="https://github.com/rak3xh/Interactive-qr-code"
              demoLink="https://interactive-qr-code.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
