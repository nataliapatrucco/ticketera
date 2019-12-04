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
  ButtonAddParticipants
} from "./style";
import Modal from "../deleteTicket";

import { Container } from "../deleteTicket/style";

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
    <Container>
      <AddButton>
        {user.id === ticket.authorId ? (
          <ButtonDelete onClick={() => setShowModal(!showModal)}>
            <AddIcon src="/images/delete-resting.svg" alt="" />
            ELIMINAR PREGUNTA
          </ButtonDelete>
        ) : checkParticipants(ticket.users) ? (
          <ButtonParticipants
            onClick={() => handleRemove(ticket.id, ticket.statusId)}
          >
            <AddIcon src="/images/add-active.svg" alt=""></AddIcon>
            ME INTERESA
          </ButtonParticipants>
        ) : (
          <ButtonAddParticipants
            onClick={() => handleAdd(ticket.id, ticket.statusId)}
          >
            <AddIcon src="/images/add-resting.svg" alt=""></AddIcon>
            ME INTERESA
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
    </Container>
  );
};
