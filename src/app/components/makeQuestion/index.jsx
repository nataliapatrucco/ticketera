import React, { useState } from "react";
import {
  Container,
  Question,
  Img,
  ModalContainer,
  ModalQuestion,
  ModalInputContainer,
  ModalInput,
  ModalButtonContainer,
  ModalButton
} from "./style";
import { ModalBackground } from "../modalBackground/style";

export default props => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container>
      <Img src="images/perfil.jpeg" alt="foto"></Img>
      <Question onClick={() => setShowModal(!showModal)}>
        ¿Cual es tu duda? ¿En que ejercicio te trabaste?
      </Question>
      {showModal && (
        <ModalBackground>
          <ModalContainer>
            <ModalQuestion marginTop="32px">
              ¿Cuál es tu duda? ¿En qué ejercicio te trabaste?
            </ModalQuestion>
            <ModalInputContainer height="90px">
              <ModalInput fontSize="20px"></ModalInput>
            </ModalInputContainer>
            <ModalQuestion marginTop={"10px"}>
              ¿Querés desarrollar un poco más?
            </ModalQuestion>
            <ModalInputContainer height="112px">
              <ModalInput fontSize="14px"></ModalInput>
            </ModalInputContainer>
            <ModalButtonContainer>
              <ModalButton
                color="#62d0ff"
                marginTop="165px"
                marginLeft="450px"
              ></ModalButton>
              <ModalButton
                color="transparent"
                border="solid 1px rgba(255, 255, 255, 0.12);"
                marginTop="165px"
                marginLeft="10px"
              ></ModalButton>
            </ModalButtonContainer>
          </ModalContainer>
        </ModalBackground>
      )}
    </Container>
  );
};
