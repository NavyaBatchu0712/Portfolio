import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { SiMysql } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import {  SiHtml5, SiCss3 } from "react-icons/si";
import { SiOpenai } from "react-icons/si";


import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
  <DiNodejs />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <DiReact />
</Col>

<Col xs={4} md={2} className="tech-icons">
  <SiTensorflow />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <DiGit />
</Col>
  <Col xs={4} md={2} className="tech-icons">
  <SiHtml5 />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiCss3 />
</Col>
<Col xs={4} md={2} className="tech-icons">
  <SiOpenai />
</Col>

    </Row>
  );
}

export default Techstack;
