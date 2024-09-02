import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Card from "react-bootstrap/Card";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
 
    <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
      
    

<h3>Contact Details</h3>
<p style={{ textAlign: "left" }}>
  <span className="purple">Mobile:</span> +1 2792043523
  <br />
  <span className="purple">Email:</span> navyakrishnabatchu@csus.edu
</p>



      </blockquote>
    </Card.Body>
  </Card>
  );
}
export default Home2;
