import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserTickets } from "../../redux/actions/tickets";
import { QuestionStatus, QuestionStatusContainer } from "./style";
import Open from "../Open/index";

const STATUS_INDEX = {
  pending: 1,
  answered: 3,
  rejected: 4
};

export default () => {
  const dispatch = useDispatch();
  const { status } = useParams();
  const [index, setIndex] = useState(1);
  useEffect(() => {
    dispatch(fetchUserTickets());
  }, []);

  useEffect(() => {
    setIndex(STATUS_INDEX[status]);
  }, [status]);

  const tickets = useSelector(state => state.tickets.userTickets);

  return (
    <QuestionStatusContainer>
      <Link to={`/userTickets/pending`}>
        <QuestionStatus selected={status === 'pending'}>PENDIENTES</QuestionStatus>
      </Link>
      <Link to={`/userTickets/answered`}>
        <QuestionStatus selected={status === 'answered'}>RESPONDIDAS</QuestionStatus>
      </Link>
      <Link to={`/userTickets/rejected`}>
        <QuestionStatus selected={status === 'rejected'}>RECHAZADAS</QuestionStatus>
      </Link>
      {tickets[index] && tickets[index].map(ticket => <Open ticket={ticket} />)}
    </QuestionStatusContainer>
  );
};
