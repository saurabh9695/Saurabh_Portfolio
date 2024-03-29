import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.jpg";
import you from "../../Assets/Projects/you.jpg";
import ecom from "../../Assets/Projects/ecom.jpg";
import curr from "../../Assets/Projects/curr.jpg";
import admin from "../../Assets/Projects/admin.jpg";
import weather from "../../Assets/Projects/weather.jpg";
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
              imgPath={you}
              isBlog={false}
              title="Youtube-Clone"
              description=
              "Developed a YouTube clone project utilizing React and MUI library
               for UI components, with responsive design facilitated by JavaScript.
                Integrated React Router for navigation and Axios for backend data retrieval, 
                while implementing seamless video playback via React Player for enhanced user experience."
              ghLink="https://github.com/saurabh9695/Youtube_Clone"
              demoLink="https://youtube-clone-rosy-xi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="ToDo-App"
              description="
              Built a user-friendly ToDo app using JavaScript, React, and MongoDB, enabling easy task management by
               adding, updating, and deleting tasks hassle-free, ensuring a seamless and efficient experience."
              ghLink="https://github.com/saurabh9695/ToDo_App"
              demoLink="https://to-do-app-three-lime.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="Ecommerce-Website"
              description=
              "Feature the Real-Time Ecommerce Website in your portfolio, emphasizing its dynamic capabilities. Delivering live product updates, secure transactions, and responsive design, this platform ensures an unparalleled online shopping experience. Demonstrate expertise in crafting innovative digital storefronts tailored to meet the evolving needs of modern consumers."
              ghLink="https://github.com/saurabh9695/Ecommerce-Website"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admin}
              isBlog={false}
              title="Admin-Dashboard"
              description=
              "Navigate essential functions seamlessly with React Admin Dashboard, featuring a range of critical menus for efficient project management. Access key features effortlessly, enhancing your ability to oversee and control various project facets. Empower your portfolio with the dynamic functionality offered by React Admin Dashboard."
              ghLink="https://github.com/saurabh9695/React-admin-dashboard"
              demoLink="https://react-admin-dashboard-one-nu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={curr}
              isBlog={false}
              title="Currency Converter"
              description=" Used the Currency Converter simplifies international transactions by providing real-time currency exchange rates,ensuring accurate and timely conversions.Empower your financial decisions with this essential tool for seamless currency management"
              ghLink="https://github.com/saurabh9695/Currency-converter"
             demoLink="https://currency-converter-five-phi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather"
              description=
              "Integrate Real-Time Weather App into a portfolio for instant access to live weather updates. With accurate forecasts and user-friendly features, this app ensures timely information to keep users prepared for changing conditions. Showcase a commitment to cutting-edge functionality and real-time data in this portfolio addition."
              ghLink="https://github.com/saurabh9695/weather-app"
              demoLink="https://lively-caramel-f5a336.netlify.app/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
