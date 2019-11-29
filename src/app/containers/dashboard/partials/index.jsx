import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MakeQuestion from "../../../components/makeQuestion";
import ProcessingHeader from "./ProcessingHeader";

import Open from "../../../components/Open";
import {
  Container,
  Title,
  OpenDiv,
  ProcessSection,
  ProcessTitle,
  OpenSection,
  ProcessTicket,
  QuestionSection,
  ProcessDiv
} from "../style";

import {Section} from './style'
export default ({
  open,
  handleAdd,
  handleRemove,
  ticket,
  individual,
  setIndividual,
  getTicket
}) => {
  return (
    <OpenDiv>
      {!individual ? (
        <>
          <QuestionSection>
            <Title>HACÉ UNA PREGUNTA</Title>
            <MakeQuestion />
          </QuestionSection>
          <OpenSection>
            <Title>PREGUNTAS PENDIENTES ({open.length})</Title>
            {open.map((ticket, index) => (
              <div key={ticket.id}>
                <Open
                  ticket={ticket}
                  index={index + 1}
                  handleAdd={handleAdd}
                  handleRemove={handleRemove}
                  getTicket={getTicket}
                  setIndividual={setIndividual}
                  individual={individual}
                />
                <br />
              </div>
            ))}
          </OpenSection>
        </>
      ) : (
        <>
          <QuestionSection>
            <Title onClick={() => setIndividual(false)}>VOLVER</Title>
          </QuestionSection>
          {ticket.statusId === 2 ? <ProcessingHeader ticket={ticket} /> : ""}
          <Section>
            <Open
              ticket={ticket}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
              getTicket={getTicket}
              setIndividual={setIndividual}
              individual={individual}
            />
            <br />
          </Section>
        </>
      )}
    </OpenDiv>
  );
};
