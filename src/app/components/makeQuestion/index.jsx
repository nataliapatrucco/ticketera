import React, { useState, useSelector } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dropzone from "react-dropzone";
import { ToastsContainer, ToastsStore } from "react-toasts";

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
  Icon,
  PreviewImg
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
  const [image, setImage] = useState([]);
  const [file, setFile] = useState([]);

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = ticket => {
    createNewTicket(ticket)
      .then(ticket => {
        image &&
          image.map(element => {
            createNewImage(ticket.data.id, element);
          });
      })
      .then(() => dispatch(fetchOpen()))
      .then(() => setFile([]))
      .then(() => ToastsStore.success("Agregaste una pregunta!"))
      .then(() => setShowModal(!showModal));
  };

  const handleImageChange = e => {
    const files = e.target.files;
    for (let i of files) {
      const preview = URL.createObjectURL(i);
      setFile([...file, preview]);
    }
    const formData = new FormData();
    for (const el of files) {
      formData.append("file", el);
    }
    setImage([...image, formData]);
  };

  const handleImageDrop = files => {
    const droppedFiles = files;
    for (const i of droppedFiles) {
      const preview = URL.createObjectURL(i);
      setFile([...file, preview]);
    }
    const formData = new FormData();
    for (let el of droppedFiles) {
      formData.append("file", el);
    }

    setImage([...image, formData]);
  };

  const notify = () => toast("Wow so easy !");

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

      <ToastsContainer store={ToastsStore} />

      {showModal && (
        <ModalBackground>
          <ModalContainer>
            <ModalCloseButton
              onClick={() => {
                setShowModal(!showModal);
                setFile([]);
              }}
            >
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
            <ModalButtonContainer>
              {file
                ? file.map(element => <PreviewImg src={element}></PreviewImg>)
                : null}
              <ModalUploadBox>
                <Dropzone
                  onDrop={acceptedFiles => handleImageDrop(acceptedFiles)}
                  className="dropzone"
                  activeClassName="active-dropzone"
                  multiple
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input
                          {...getInputProps()}
                          onChange={e => handleImageChange(e)}
                        />

                        <ModalUploadBoxPlus>+</ModalUploadBoxPlus>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </ModalUploadBox>
            </ModalButtonContainer>
            <ModalButtonContainer justifyContent="flex-end">
              <ModalButton
                color="transparent"
                border="solid 1px rgba(255, 255, 255, 0.12);"
                marginTop="30px"
                /*  marginLeft="10px" */
                onClick={() => {
                  setShowModal(!showModal);
                }}
              >
                <ModalButtonLabel color="#62d0ff">CANCELAR</ModalButtonLabel>
              </ModalButton>
              <ModalButton
                color="#62d0ff"
                /*   marginTop="30px" */
                marginRight="12px"
                border="none"
                marginLeft="12px"
                type="submit"
                onClick={e => {
                  e.preventDefault();
                  handleSubmit({
                    title: state.title,
                    content: state.content
                  });
                  notify();
                }}
              >
                <ModalButtonLabel color="#071c34">PUBLICAR</ModalButtonLabel>
              </ModalButton>

              {/* <ModalButton
                color="transparent"
                border="solid 1px rgba(255, 255, 255, 0.12);"
                marginTop="30px"
                marginLeft="10px"
                onClick={() => {
                  setShowModal(!showModal);
                  setFile([]);
                }}
              >
                <ModalButtonLabel color="#62d0ff">CANCELAR</ModalButtonLabel>
              </ModalButton> */}
            </ModalButtonContainer>
          </ModalContainer>
        </ModalBackground>
      )}
    </Container>
  );
};
