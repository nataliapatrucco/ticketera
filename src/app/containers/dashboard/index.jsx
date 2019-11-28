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
  Section,
  Title,
  ProcessTitle,
  SectionProcess,
  SectionAnswer
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
      <Navbar/>
      <Section>
        <Title color={"white"} width={"426px"} opacity={"0.9"}>
          HACÉ UNA PREGUNTA
        </Title>
        <MakeQuestion />
      </Section>
      <Section>
        <Title color={"white"} width={"426px"} opacity={"0.9"}>
          PREGUNTAS PENDIENTES ({open.length})
        </Title>
        {open.map(ticket => (
          <div key={ticket.id}>
            <Open
              ticket={ticket}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
            />
          </div>
        ))}
      </Section>
      <Section>
        <Title color={"#62d0ff"} width={"266px"}>
          RESPONDIENDO AHORA!
        </Title>

        {processing.map(ticket2 => (
          <div key={ticket2.id}>
            <Processing ticket={ticket2} />
          </div>
        ))}
      </Section>
    </Container>
  );
};
