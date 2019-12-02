import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addParticipant,
  removeParticipant,
  deleteTicket
} from "../../redux/actions/tickets";
import { AddButton, AddIcon, Text, Container } from "./style";

import { Modal } from "./modal";

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
          <>
            <AddIcon
              src="/images/add.png"
              alt=""
              onClick={() => setShowModal(!showModal)}
            />
            <Text onClick={() => setShowModal(!showModal)}>
              ELIMINAR PREGUNTA
            </Text>
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

      {showModal && <Modal />}
    </Container>
  );
};
