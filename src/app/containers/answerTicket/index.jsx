import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { answerTicket } from "../../redux/actions/tickets";
import {
  ModalBackground,
  ModalContainer,
  TicketTitle,
  TicketContent,
  ModalInput,
  ButtonContainer,
  StatusButton,
  ModalButton,
  ModalButtonLabel
} from "./style";

export default ({ ticket, setShowAnswerModal }) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(1);
  const [description, setDescription] = useState("");

  const handleSubmit = id => {
    dispatch(answerTicket(id, { status, description })).then(() =>
      setShowAnswerModal(false)
    );
  };
  const statuses = ["OPEN", "IN PROCESS", "ACCEPT", "REJECT"];

  return (
    <ModalBackground>
      <ModalContainer>
        <TicketTitle>
          <strong>{ticket.title}</strong>
        </TicketTitle>
        <TicketContent>{ticket.content}</TicketContent>
        <ButtonContainer>
          {statuses.map((name, index) => (
            <StatusButton onClick={() => setStatus(index + 1)} key={index}>
              {name}
            </StatusButton>
          ))}
        </ButtonContainer>

        <ModalInput
          name="description"
          onChange={e => setDescription(e.target.value)}
        ></ModalInput>
        <ButtonContainer>
          <ModalButton
            color="#62d0ff"
            marginTop="30px"
            marginLeft="450px"
            type="submit"
            onClick={e => {
              e.preventDefault();
              handleSubmit(ticket.id);
            }}
          >
            <ModalButtonLabel color="#071c34">PUBLICAR</ModalButtonLabel>
          </ModalButton>
          <ModalButton
            color="transparent"
            border="solid 1px rgba(255, 255, 255, 0.12);"
            marginTop="30px"
            marginLeft="10px"
            onClick={() => setShowAnswerModal(false)}
          >
            <ModalButtonLabel color="#62d0ff">CANCELAR</ModalButtonLabel>
          </ModalButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalBackground>
  );
};
