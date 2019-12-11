import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserTickets } from "../../redux/actions/tickets";
import { QuestionStatus, QuestionStatusContainer } from "./style";
import Open from "../Open/index";

const STATUS_INDEX = {
  pending: 1,
  processing: 2,
  answered: 3,
  rejected: 4
};

export default function UserTicketsComponent() {
  const user = useSelector(state => state.user.user);
  const tickets = useSelector(state => state.tickets.userTickets);

  const dispatch = useDispatch();
  const { status } = useParams();
  let initialStatus = user && user.isAdmin ? 2 : 1;
  const [index, setIndex] = useState(initialStatus);
  useEffect(() => {
    dispatch(fetchUserTickets());
  }, []);
  console.log("aaaaaaaaa", initialStatus);
  console.log("bbbbbbbbbb", index);

  useEffect(() => {
    setIndex(STATUS_INDEX[status]);
  }, [status]);

  return (
    <QuestionStatusContainer>
      {initialStatus === 2 ? (
        <Link to={`/userTickets/processing`}>
          <QuestionStatus selected={status === "processing"}>
            RESPONDIENDO
          </QuestionStatus>
        </Link>
      ) : (
        <Link to={`/userTickets/pending`}>
          <QuestionStatus selected={status === "pending"}>
            PENDIENTES
          </QuestionStatus>
        </Link>
      )}
      <Link to={`/userTickets/answered`}>
        <QuestionStatus selected={status === "answered"}>
          RESPONDIDAS
        </QuestionStatus>
      </Link>
      <Link to={`/userTickets/rejected`}>
        <QuestionStatus selected={status === "rejected"}>
          RECHAZADAS
        </QuestionStatus>
      </Link>
      {tickets[index] && tickets[index].map(ticket => <Open ticket={ticket} />)}
    </QuestionStatusContainer>
  );
}
