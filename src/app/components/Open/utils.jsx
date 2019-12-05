import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addParticipant,
  removeParticipant,
  deleteTicket
} from "../../redux/actions/tickets";
import {
  AddButton,
  AddIcon,
  ButtonParticipants,
  ButtonDelete,
  ButtonAddParticipants,
  ShareButton,
  Texto
} from "./style";
import Modal from "../deleteTicket";

// import { Container } from "../deleteTicket/style";

export default ({ ticket }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.user);

  const handleAdd = (ticketId, statusId) => {
    dispatch(addParticipant(ticketId, statusId));
  };
  const handleRemove = (ticketId, statusId) => {
    dispatch(removeParticipant(ticketId, statusId));
  };

  const checkParticipants = participants => {
    return participants.some(participant => participant.id === user.id);
  };

  return (
    <>
      <AddButton>
        {user.id === ticket.authorId ? (
          <ButtonDelete
            color={"#cf6679"}
            onClick={() => setShowModal(!showModal)}
          >
            <AddIcon src="/images/delete-resting.svg" alt="" />
            <Texto color={"#cf6679"}>ELIMINAR PREGUNTA</Texto>
          </ButtonDelete>
        ) : checkParticipants(ticket.users) ? (
          <ButtonParticipants
            color={"#62d0ff"}
            onClick={() => handleRemove(ticket.id, ticket.statusId)}
          >
            <AddIcon src="/images/add-active.svg" alt=""></AddIcon>
            <Texto color={"#62d0ff"}>ME INTERESA</Texto>
          </ButtonParticipants>
        ) : (
          <ButtonAddParticipants
            color={"#62d0ff"}
            onClick={() => handleAdd(ticket.id, ticket.statusId)}
          >
            <AddIcon src="/images/add-resting.svg" alt=""></AddIcon>
            <Texto color={"#62d0ff"}>ME INTERESA</Texto>
          </ButtonAddParticipants>
        )}
      </AddButton>
      {showModal ? (
        <Modal
          ticket={ticket}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ) : null}
      <ShareButton>
        <AddIcon src="/images/flecha-hacia-atras.svg"></AddIcon>
        <Texto>COMPARTIR</Texto>
      </ShareButton>
    </>
  );
};
