import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { QuestionSection, Title, Section, Container } from "./style";
import Open from "../../components/Open";
import ProcessingHeader from "./partials/ProcessingHeader";
import { fetchTicket } from "../../redux/actions/tickets";

export default props => {
  const ticket = useSelector(state => state.tickets.single);
  const dispatch = useDispatch();

  console.log("las props", props);

  useEffect(() => {
    dispatch(fetchTicket(props.match.params.slug));
  }, []);

  return (
    <Container>
      <QuestionSection>
        <Title onClick={() => props.history.goBack()}>VOLVER</Title>
      </QuestionSection>
      {ticket.statusId === 2 ? <ProcessingHeader ticket={ticket} /> : ""}
      <Section>
        <Open ticket={ticket} params={props.match.params.slug} />
        <br />
      </Section>
    </Container>
  );
};
