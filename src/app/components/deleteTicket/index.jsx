import {
  ModalContainer,
  ModalQuestion,
  ButtonContainer,
  DeleteButton,
  CancelButton
} from "./style";
import { deleteTicket } from "../../redux/actions/tickets";
import { useDispatch, useSelector } from "react-redux";

const dispatch = useDispatch();

export default Modal = () => (
  <ModalBackground>
    <ModalContainer>
      <ModalQuestion>¿Querés eliminar esta pregunta?</ModalQuestion>
      <ButtonContainer>
        <DeleteButton
          onClick={() => {
            setShowModal(!showModal), dispatch(deleteTicket(ticket.id));
          }}
        >
          ELIMINAR
        </DeleteButton>
        <CancelButton onClick={() => setShowModal(!showModal)}>
          CANCELAR
        </CancelButton>
      </ButtonContainer>
    </ModalContainer>
  </ModalBackground>
);
