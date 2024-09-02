import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import Fakes from "../../Assets/Projects/Fakes.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import First from "../../Assets/Projects/First.jpg";
import Schedule from "../../Assets/Projects/Schedule.webp";
import Smart from "../../Assets/Projects/Smart.jpeg";
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
              imgPath={Smart}
              isBlog={false}
              title="Smart Streetlight Management System"
              description="This project focuses on conserving energy and reducing operational costs by automating the control of streetlights using IoT technology. Traditional streetlighting systems often waste electricity by running at full intensity from sunset to sunrise, even when ambient light is sufficient. This system addresses the inefficiency by automatically adjusting streetlight operation based on real-time conditions, using energy-efficient LEDs instead of traditional HID lamps. The project enables significant energy savings, reduces the need for manual maintenance, and contributes to sustainable urban infrastructure. Future enhancements include adaptive lighting based on motion detection and integration with broader smart city initiatives.
 "
              ghLink="https://github.com/NavyaBatchu0712/Smart-Street-Light/tree/main"
              demoLink="https://www.youtube.com/watch?v=389HUbqBD5c"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Neural-Network-Based-Approach-for-Emotion-Recognition"
              description="This research explores the integration of advanced machine learning techniques, including VGG16, ResNet, and Vision Transformers, to identify psychological states through facial emotion detection. The study utilized a dataset of images depicting seven distinct emotions and developed models capable of real-time emotion recognition. The work is particularly relevant in healthcare, providing valuable insights for professionals to better understand patients' emotional well-being. This research highlights the potential of leveraging neural networks for accurate emotion detection in practical, real-world applications."
              ghLink="https://github.com/NavyaBatchu0712/Neural-Network-Based-Approach-for-Emotion-Recognition"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fakes}
              isBlog={false}
              title="Fake-News Detection"
              description="Developed a fake news detection system leveraging various attention mechanisms and BERT. The project explored and implemented self-attention, co-attention, and cross-attention in combination with pre-trained models like VGG16, ResNet, and ResNet50. The models were evaluated on benchmark datasets using accuracy, precision, recall, and F1 score, demonstrating effectiveness in identifying misinformation. The system is deployable using platforms like Flask or Docker for real-world applications."
              ghLink="https://github.com/NavyaBatchu0712/Fake-News-Detection/tree/main"
                          
            />
          </Col>

        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Schedule}
              isBlog={false}
              title="Calender-Scheduler"
              description="Developed a software solution to automate the process of populating academic calendars with accurate entries and reminders based on timetables, exam duties, and allocations. Designed to streamline administrative tasks for the Exam Controller, Department Office, and faculty members, the software features secure login, centralized calendar management, customizable reminders, and user profile displays. The project utilized Java, NodeJS, Firebase, and MySQL, with a frontend built in Java/XML. Comprehensive testing was performed using Jenkins, JUnit, Selenium, and included unit, UI, black-box, and monkey testing methods."
              ghLink="https://github.com/NavyaBatchu0712/Calender-Scheduler"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={First}
              imgStyle={{ width: '50%', height: 'auto' }} // Adjust the width and height as needed
              isBlog={false}
    
              title="Face Recognition and Emotion Detection"
              description="Developed a mobile application using MTCNN for face detection, Facenet for face identification, and CNN for depression detection via facial expression. The app provides medical records in emergencies, achieving 98% accuracy in face identification and using the FER-2013 dataset for depression detection. Designed for Android (5.0+), it optimizes space by deleting images post-feature extraction and connects to Firebase for database management. Future improvements include reducing runtime, optimizing app size via cloud computing, and enhancing database security."
              ghLink="https://github.com/NavyaBatchu0712/Person_and_Psychological_states_Identification/tree/main/Person_and_Psychological_states_Identification-master"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
