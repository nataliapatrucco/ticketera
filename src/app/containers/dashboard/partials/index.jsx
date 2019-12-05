import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MakeQuestion } from "../../../components/makeQuestion";
import Open from "../../../components/Open";
import { Title, OpenDiv, OpenSection, QuestionSection } from "../style";
import { fetchOpen } from "../../../redux/actions/tickets";

export default () => {
  const open = useSelector(state => state.tickets.open);
  const dispatch = useDispatch();
  const processing = useSelector(state => state.tickets.processing);

  useEffect(() => {
    dispatch(fetchOpen());
  }, []);

  return (
    <OpenDiv>
      <QuestionSection>
        <Title>HACÉ UNA PREGUNTA</Title>
        <MakeQuestion />
      </QuestionSection>
      <OpenSection>
        <Title>PREGUNTAS PENDIENTES ({open.length})</Title>
        {open.map((ticket, index) => (
          <div key={ticket.id}>
            <Open ticket={ticket} index={index + 1} />
            <br />
          </div>
        ))}
      </OpenSection>
    </OpenDiv>
  );
};
