import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOpen,
  fetchProcessing,
  addParticipant,
  removeParticipant
} from "../../redux/actions/tickets";
import Open from "../../components/Open";
import Processing from "../../components/Processing";
import Sidebar from "../../components/sidebar/index";
import { Container, Section, Title, ProcessTitle } from "./style";

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
      <Section>
        <Title>HACÉ UNA PREGUNTA</Title>
      </Section>
      <Section>
        <Title>PREGUNTAS PENDIENTES ({open.length})</Title>
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
        <ProcessTitle>RESPONDIENDO AHORA!</ProcessTitle>

        {processing.map(ticket2 => (
          <div key={ticket2.id}>
            <Processing ticket={ticket2} />
          </div>
        ))}
      </Section>
    </Container>
  );
};
