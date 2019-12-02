import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserTickets } from "../../redux/actions/tickets";
import { QuestionStatus, QuestionStatusContainer } from './style'

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserTickets());
  }, []);

  const tickets = useSelector(state => state.tickets.userTickets);

  return (
    <QuestionStatusContainer>
    <QuestionStatus>
      PENDIENTES
    </QuestionStatus>
    <QuestionStatus>
      RESPONDIDAS
    </QuestionStatus>
    <QuestionStatus>
      RECHAZADAS
    </QuestionStatus>

  </QuestionStatusContainer>
  ) 
};
