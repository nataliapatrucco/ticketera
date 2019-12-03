import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { fetchUserTickets } from "../../redux/actions/tickets";
import { QuestionStatus, QuestionStatusContainer } from './style'

export default ({match}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("pendiente")

  useEffect(() => {
    dispatch(fetchUserTickets());
  }, []);

  const tickets = useSelector(state => state.tickets.userTickets);

  return (
    <QuestionStatusContainer>
      <Link to ={`${match.url}/pending`}>
    <QuestionStatus value={value} >
      PENDIENTES
    </QuestionStatus>
    </Link>
    <Link to ={`${match.url}/answered`}>
    <QuestionStatus value={value} >
      RESPONDIDAS
    </QuestionStatus>
    </Link>
    <Link to={`${match.url}/rejected`}>
    <QuestionStatus value={value} >
      RECHAZADAS
    </QuestionStatus>
    </Link>
  </QuestionStatusContainer>
  ) 
};
