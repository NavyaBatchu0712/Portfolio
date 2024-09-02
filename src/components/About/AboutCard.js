import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
      
      <p style={{ textAlign: "justify", marginTop: "-10px" }}>
 I am a Master of Science in Computer Science student at California State University - Sacramento with a strong focus on full-stack development and IT infrastructure.
  
  My experience at Auradine Inc. allowed me to engage in the complete software development lifecycle, from UX design to backend implementation, ensuring the delivery of user-friendly and reliable applications.
 
  At the California Department of Fish and Wildlife, I managed Azure-based systems and implemented data governance solutions, combining technical expertise with a focus on security and compliance.
  
  I am passionate about building innovative solutions that bridge the gap between technology and user needs.
</p>





      </blockquote>
    </Card.Body>
  </Card>
  );
}
 

export default AboutCard;
