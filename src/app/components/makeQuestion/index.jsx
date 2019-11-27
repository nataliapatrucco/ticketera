import React from "react";
import { Container, Question, Img } from "./style";

export default props => {
  return (
    <Container>
      <Img src="images/face.jpeg" alt="foto"></Img>
      <Question>¿Cual es tu duda? ¿En que ejercicio te trabaste?</Question>
    </Container>
  );
};
