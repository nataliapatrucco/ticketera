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

export default ({ ticket }) => {
  const [showModal, setShowModal] = useState(false);

  const user = useSelector(state => state.user.user);

  const dispatch = useDispatch();

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
    <AddButton>
      {user.id === ticket.authorId ? (
        <ButtonDelete onClick={() => setShowModal(true)}>
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
      {showModal && <Modal ticket={ticket} />}
    </AddButton>
  );
};
