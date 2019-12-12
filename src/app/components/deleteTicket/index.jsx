import React, { useEffect } from "react";
import {
  ModalContainer,
  ModalQuestion,
  ButtonContainer,
  DeleteButton,
  CancelButton
} from "./style";
import {
  deleteTicket,
  fetchOpen,
  fetchProcessing,
  fetchUserTickets
} from "../../redux/actions/tickets";
import { useDispatch, useSelector } from "react-redux";
import { ModalBackground } from "../modalBackground/style";
import { ToastsContainer, ToastsStore } from "react-toasts";

export default function DeleteTicketComponent({
  ticket,
  setShowModal,
  showModal
}) {
  const dispatch = useDispatch();

  const handleClick = ticket => {
    setShowModal(false);
    dispatch(deleteTicket(ticket))
      .then(() => ToastsStore.success("Eliminaste tu pregunta!"))
      .then(() => dispatch(fetchOpen()))
      .then(() => dispatch(fetchUserTickets()));
  };

  return (
    <ModalBackground>
      <ToastsContainer store={ToastsStore} />
      <ModalContainer>
        <ModalQuestion>¿Querés eliminar esta pregunta?</ModalQuestion>
        <ButtonContainer>
          <DeleteButton ticket={ticket} onClick={() => handleClick(ticket)}>
            ELIMINAR
          </DeleteButton>
          <CancelButton onClick={() => setShowModal(!showModal)}>
            CANCELAR
          </CancelButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalBackground>
  );
}
