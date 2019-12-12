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
  AnswerIcon,
  ButtonParticipants,
  ButtonDelete,
  ButtonAddParticipants,
  ButtonAnswer,
  ShareButton,
  ShareIcon
} from "./style";
import Modal from "../deleteTicket";
import AnswerModal from "../../containers/answerTicket";

import { Container } from "../deleteTicket/style";

export default ({ ticket }) => {
  const [showModal, setShowModal] = useState(false);
  const [showAnswerModal, setShowAnswerModal] = useState(false);
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
        {!user.isAdmin ? (
          <>
            {(user.id === ticket.authorId && ticket.statusId == 1) ? (
              <ButtonDelete onClick={() => setShowModal(!showModal)}>
                <AddIcon src="/images/delete-resting.svg" alt="" />
                ELIMINAR PREGUNTA
              </ButtonDelete>
            ) : checkParticipants(ticket.users)  ? (
              <ButtonParticipants
                onClick={() => handleRemove(ticket.id, ticket.statusId)}
              >
                <AddIcon src="/images/add-active.svg" alt=""></AddIcon>
                ME INTERESA
              </ButtonParticipants>
            ) : ticket.authorId !== user.id &&(
              <ButtonAddParticipants
                onClick={() => handleAdd(ticket.id, ticket.statusId)}
              >
                <AddIcon src="/images/add-resting.svg" alt=""></AddIcon>
                ME INTERESA
              </ButtonAddParticipants>
            )}
          </>
        ) : (
          <>
            {ticket.statusId === 3 || ticket.statusId === 4 ? (
              <ButtonAnswer
                onClick={() => setShowAnswerModal(!showAnswerModal)}
              >
                <AnswerIcon src="/images/answerIcon.svg" alt="" />
                EDITAR RESPUESTA
              </ButtonAnswer>
            ) : (
              <>
                <ButtonAnswer
                  onClick={() => setShowAnswerModal(!showAnswerModal)}
                >
                  <AnswerIcon src="/images/answerIcon.svg" alt="" />
                  RESPONDER
                </ButtonAnswer>
                <ButtonDelete onClick={() => setShowModal(!showModal)}>
                  <AddIcon src="/images/delete-resting.svg" alt="" />
                  BORRAR PREGUNTA
                </ButtonDelete>
              </>
            )}
          </>
        )}
        <ShareButton>
          <ShareIcon className="share" src="/images/flecha-hacia-atras.svg" />
          COMPARTIR
        </ShareButton>
      </AddButton>
      {showModal ? (
        <Modal
          ticket={ticket}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ) : null}
      {showAnswerModal ? (
        <AnswerModal ticket={ticket} setShowAnswerModal={setShowAnswerModal} />
      ) : null}
    </>
  );
};
