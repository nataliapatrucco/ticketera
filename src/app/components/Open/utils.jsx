// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addParticipant,
//   removeParticipant,
//   deleteTicket
// } from "../../redux/actions/tickets";
// import {
//   AddButton,
//   AddIcon,
//   ButtonParticipants,
//   ButtonDelete,
//   ButtonAddParticipants,
//   ShareButton,
//   Texto,
//   ButtonAnswer
// } from "./style";
// import Modal from "../deleteTicket";
// import AnswerModal from "../../containers/answerTicket";

// // import { Container } from "../deleteTicket/style";

// export default ({ ticket }) => {
//   const [showModal, setShowModal] = useState(false);
//   const [showAnswerModal, setShowAnswerModal] = useState(false);
//   const dispatch = useDispatch();

//   const user = useSelector(state => state.user.user);

//   const handleAdd = (ticketId, statusId) => {
//     dispatch(addParticipant(ticketId, statusId));
//   };
//   const handleRemove = (ticketId, statusId) => {
//     dispatch(removeParticipant(ticketId, statusId));
//   };

//   const checkParticipants = participants => {
//     return participants.some(participant => participant.id === user.id);
//   };

//   return (
//     <>
//       <AddButton>
//         {!user.isAdmin ? (
//           <>
//             {user.id === ticket.authorId ? (
//               <ButtonDelete
//             color={"#cf6679"}
//             onClick={() => setShowModal(!showModal)}
//           >
//             <AddIcon src="/images/delete-resting.svg" alt="" />
//             <Texto color={"#cf6679"}>ELIMINAR PREGUNTA</Texto>
//           </ButtonDelete>
//             ) : checkParticipants(ticket.users) ? (
//               <ButtonParticipants
//             color={"#62d0ff"}
//             onClick={() => handleRemove(ticket.id, ticket.statusId)}
//           >
//             <AddIcon src="/images/add-active.svg" alt=""></AddIcon>
//             <Texto color={"#62d0ff"}>ME INTERESA</Texto>
//           </ButtonParticipants>
//             ) : (
//               <ButtonAddParticipants
//             color={"#62d0ff"}
//             onClick={() => handleAdd(ticket.id, ticket.statusId)}
//           >
//             <AddIcon src="/images/add-resting.svg" alt=""></AddIcon>
//             <Texto color={"#62d0ff"}>ME INTERESA</Texto>
//           </ButtonAddParticipants>
//             )}
//           </>
//         ) : (
//           <>
//             <ButtonAnswer onClick={() => setShowAnswerModal(!showAnswerModal)}>
//               <AddIcon src="/images/answerIcon.svg" alt="" />
//               RESPONDER
//             </ButtonAnswer>
//             <ButtonDelete onClick={() => setShowModal(!showModal)}>
//               <AddIcon src="/images/delete-resting.svg" alt="" />
//               BORRAR PREGUNTA
//             </ButtonDelete>
//           </>
//         )}
//       </AddButton>
//       {showModal ? (
//         <Modal
//           ticket={ticket}
//           showModal={showModal}
//           setShowModal={setShowModal}
//         />
//       ) : null}
//       {showAnswerModal ? (
//         <AnswerModal ticket={ticket} setShowAnswerModal={setShowAnswerModal} />
//       ) : null}
//       <ShareButton>
//         <AddIcon src="/images/flecha-hacia-atras.svg"></AddIcon>
//         <Texto>COMPARTIR</Texto>
//       </ShareButton>
//     </>
//   );
// };

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
  ButtonAnswer
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
    <Container>
      <AddButton>
        {!user.isAdmin ? (
          <>
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
          </>
        ) : (
          <>
            <ButtonAnswer onClick={() => setShowAnswerModal(!showAnswerModal)}>
              <AddIcon src="/images/answerIcon.svg" alt="" />
              RESPONDER
            </ButtonAnswer>
            <ButtonDelete onClick={() => setShowModal(!showModal)}>
              <AddIcon src="/images/delete-resting.svg" alt="" />
              BORRAR PREGUNTA
            </ButtonDelete>
          </>
        )}
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
    </Container>
  );
};
