import React, { useState, useSelector } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  Container,
  Question,
  Img,
  ModalContainer,
  ModalQuestion,
  ModalInputContainer,
  ModalInput,
  ModalButtonContainer,
  ModalButton,
  ModalButtonLabel,
  ModalUploadBox,
  ModalUploadBoxPlus,
  ModalCloseButton,
  Icon
} from "./style";
import { ModalBackground } from "../modalBackground/style";
import {
  createNewTicket,
  fetchOpen,
  createNewImage
} from "../../redux/actions/tickets";

export const MakeQuestion = props => {
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState({
    title: "",
    content: ""
  });
  const [image, setImage] = useState(null);

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = ticket => {
    createNewTicket(ticket)
      .then(ticket => createNewImage(ticket.data.id, image))
      .then(() => dispatch(fetchOpen()))
      .then(() => setShowModal(!showModal));
  };

  const handleImageChange = e => {
    const files = e.target.files;
    const formData = new FormData();
    formData.append("file", files[0]);
    setImage(formData);
  };

  return (
    <Container>
      <Img src="images/perfil.jpeg" alt="foto"></Img>
      <Question
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        ¿Cual es tu duda? ¿En que ejercicio te trabaste?
      </Question>
      {showModal && (
        <ModalBackground>
          <ModalContainer>
            <ModalCloseButton onClick={() => setShowModal(!showModal)}>
              X
            </ModalCloseButton>
            <ModalQuestion marginTop="32px">
              ¿Cuál es tu duda? ¿En qué ejercicio te trabaste?
            </ModalQuestion>
            <ModalInputContainer height="90px">
              <ModalInput
                name="title"
                onChange={handleChange}
                fontSize="20px"
                height="80px"
                placeholder='Ej: "No puedo solucionar el Error de la Consola 12345678"'
              ></ModalInput>
            </ModalInputContainer>
            <ModalQuestion marginTop={"10px"}>
              ¿Querés desarrollar un poco más?
            </ModalQuestion>
            <ModalInputContainer height="112px">
              <ModalInput
                name="content"
                fontSize="14px"
                height="105px"
                onChange={handleChange}
                placeholder="Ej: Cuando escribo el código y hago XXXXXXXXXXXXXXX me tira este error y no puedo seguir con el ejercicio"
              ></ModalInput>
            </ModalInputContainer>
            <ModalQuestion marginTop={"10px"}>
              <Icon src="images/icon-file-attachment-24-px.png"></Icon>
              Adjuntar archivos
            </ModalQuestion>
            <ModalUploadBox>
              <ModalUploadBoxPlus
                type="file"
                id="file-uploader"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              ></ModalUploadBoxPlus>
            </ModalUploadBox>
            <ModalButtonContainer>
              <Link to="/ticket">
                <ModalButton
                  color="#62d0ff"
                  marginTop="30px"
                  marginLeft="450px"
                  type="submit"
                  onClick={e => {
                    //handleUpload();
                    e.preventDefault();
                    handleSubmit({
                      title: state.title,
                      content: state.content
                    });
                  }}
                >
                  <ModalButtonLabel color="#071c34">PUBLICAR</ModalButtonLabel>
                </ModalButton>
              </Link>
              <ModalButton
                color="transparent"
                border="solid 1px rgba(255, 255, 255, 0.12);"
                marginTop="30px"
                marginLeft="10px"
                onClick={() => {
                  setShowModal(!showModal);
                }}
              >
                <ModalButtonLabel color="#62d0ff">CANCELAR</ModalButtonLabel>
              </ModalButton>
            </ModalButtonContainer>
          </ModalContainer>
        </ModalBackground>
      )}
    </Container>
  );
};
