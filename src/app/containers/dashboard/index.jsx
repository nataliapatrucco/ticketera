import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOpen,
  fetchProcessing,
  addParticipant,
  removeParticipant
} from "../../redux/actions/tickets";
import Open from "../../components/Open";
import { Navbar } from '../Navbar/index'
import Processing from "../../components/Processing";
import Sidebar from "../../components/sidebar/index";
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
} from "./style";
import MakeQuestion from "../../components/makeQuestion";

export default () => {
  const dispatch = useDispatch();
  const open = useSelector(state => state.tickets.open);
  const processing = useSelector(state => state.tickets.processing);

  useEffect(() => {
    dispatch(fetchOpen());
    dispatch(fetchProcessing());
  }, []);

  const handleAdd = id => {
    dispatch(addParticipant(id));
  };
  const handleRemove = id => {
    dispatch(removeParticipant(id));
  };

  return (
    <Container>
      <OpenDiv>
        <QuestionSection>
          <Title>
            HACÉ UNA PREGUNTA
          </Title>
          <MakeQuestion />
        </QuestionSection>
        {/* <br /> */}
        {/* <br /> */}
        <OpenSection>
          <Title>
            PREGUNTAS PENDIENTES ({open.length})
          </Title>
          {open.map((ticket, index) => (
            <div key={ticket.id}>
              <Open
                ticket={ticket}
                index={index + 1}
                handleAdd={handleAdd}
                handleRemove={handleRemove}
              />
              <br />
            </div>
          ))}
        </OpenSection>
      </OpenDiv>
      <ProcessDiv>
        <ProcessTitle color={"#62d0ff"} width={"266px"}>
          RESPONDIENDO AHORA!
        </ProcessTitle>

        {processing.map(ticket2 => (
          <ProcessTicket key={ticket2.id}>
            <Processing ticket={ticket2} />
          </ProcessTicket>
        ))}
      </ProcessDiv>
    </Container>
  );
};
