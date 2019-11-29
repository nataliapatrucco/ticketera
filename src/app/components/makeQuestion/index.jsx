import React, { useState } from "react";
import {
  Container,
  Question,
  Img,
  ModalContainer,
  ModalQuestion
} from "./style";
import { ModalBackground } from "../modalBackground/style";

export default props => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container onClick={() => setShowModal(true)}>
      <Img src="images/perfil.jpeg" alt="foto"></Img>
      <Question>¿Cual es tu duda? ¿En que ejercicio te trabaste?</Question>
      {showModal && (
        <ModalBackground>
          <ModalContainer>
            <ModalQuestion>jbkwrfbk</ModalQuestion>
          </ModalContainer>
        </ModalBackground>
      )}
    </Container>
  );
};
