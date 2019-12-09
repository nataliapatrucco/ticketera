import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  answerTicket,//no es lo mismo que setStatus??
  fetchOpen,//busca los tickets por status
  fetchProcessing //lista los que estan en proceso

} from "../../redux/actions/tickets";

import {
  ModalBackground,
  ModalContainer,
  TicketTitle,
  TicketContent,
  ModalInput,
  ButtonContainer,
  StatusButton,
  ModalButton,
  ModalButtonLabel,
  ModalInputContainer,
  Line,
  UploadContainer
  
} from "./style";


import {ModalQuestion, Icon, ModalUploadBox, ModalUploadBoxPlus} from "../../components/makeQuestion/style"

export default ({ ticket, setShowAnswerModal }) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(1);
  const [description, setDescription] = useState("");
  const [inputComp, setInputComp] = useState(false);
  const [inputResp, setInputResp] = useState(false);
  const handleSubmit = id => {
    dispatch(answerTicket(id, { status, description }))
      .then(() => dispatch(fetchOpen()))
      .then(() => setShowAnswerModal(false));
  };
  return (
    <ModalBackground>
      <ModalContainer>
        <TicketTitle>
          <strong>{ticket.title}</strong>
        </TicketTitle>
        <TicketContent>{ticket.content}</TicketContent>
        <UploadContainer>
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
              /*  onChange={handleImageChange} */
            ></ModalUploadBoxPlus>
          </ModalUploadBox>
          <Line></Line>
        </UploadContainer>
        <ButtonContainer justifyContent={"space-around"} marginTop={"8px"}>
          <StatusButton
            onClick={() => {
              setInputResp(false), setInputComp(false);
            }}
          >
            PENDIENTE
          </StatusButton>
          <StatusButton
            onClick={() => {
              setStatus(2),setInputResp(!inputResp), setInputComp(false)
            }}
          >
            RESPONDIENDO
          </StatusButton>
          <StatusButton
            onClick={() => {
              setStatus(3),setInputComp(!inputComp), setInputResp(false)
            }}
          >
            COMPLETADA
          </StatusButton>
          <StatusButton
            onClick={() => {
              setStatus(4),setInputResp(false), setInputComp(false)
            }}
          >
            RECHAZADA
          </StatusButton>
        </ButtonContainer>

        {/* //muestra input */}
        {inputResp && (
          <ModalInputContainer>
            <ModalInput
              name="description"
              placeholder="En dónde vas a responder la pregunta?"
              height={"54px"}
              onChange={e => setDescription(e.target.value)}
            ></ModalInput>
          </ModalInputContainer>
        )}

        {inputComp && (
          <ModalInputContainer>
            <ModalInput
              placeholder="Escribir respuesta"
              name="description"
              height={"112px"}
              onChange={e => setDescription(e.target.value)}
            ></ModalInput>
          </ModalInputContainer>
        )}



        <ButtonContainer justifyContent={"flex-end"} marginTop={"65px"}>
          <ModalButton
            color="transparent"
            border="solid 1px rgba(255, 255, 255, 0.12);"
            marginRight="12px"
            onClick={() => setShowAnswerModal(false)}
          >
            <ModalButtonLabel color="#62d0ff">CANCELAR</ModalButtonLabel>
          </ModalButton>

          <ModalButton
            color="#62d0ff"
            type="submit"
            border="none"
            onClick={e => {
              e.preventDefault();
              handleSubmit(ticket.id);
            }}
          >



            <ModalButtonLabel color="#071c34">PUBLICAR</ModalButtonLabel>
          </ModalButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalBackground>
  );
};
