import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addParticipant,
  removeParticipant,
  deleteTicket
} from "../../redux/actions/tickets";
import { AddButton, AddIcon } from "./style";

export default ({ ticket }) => {
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
        <>
          <AddIcon src="/images/add.png" alt="" />
          ELIMINAR PREGUNTA
        </>
      ) : checkParticipants(ticket.users) ? (
        <>
          <AddIcon
            src="/images/add.png"
            alt=""
            onClick={() => handleRemove(ticket.id, ticket.statusId)}
          ></AddIcon>
          ME INTERESA
        </>
      ) : (
        <>
          <AddIcon
            src="/images/add.png"
            alt=""
            onClick={() => handleAdd(ticket.id, ticket.statusId)}
          ></AddIcon>
          ME INTERESA
        </>
      )}
    </AddButton>
  );
};
