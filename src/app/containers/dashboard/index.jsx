import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOpen,
  fetchProcessing,
  addParticipant,
  removeParticipant
} from "../../redux/actions/tickets";
import Open from "./partials";
import Processing from "../../components/Processing";
import {
  Container,
  OpenContainer,
  ProcessTitle,
  ProcessTicket,
  ProcessDiv
} from "./style";

export default () => {
  const dispatch = useDispatch();
  const open = useSelector(state => state.tickets.open);
  const processing = useSelector(state => state.tickets.processing);
  const [ticket, setTicket] = useState({});
  const [individual, setIndividual] = useState(false);

  const handleAdd = id => {
    dispatch(addParticipant(id));
  };
  const handleRemove = id => {
    dispatch(removeParticipant(id));
  };

  useEffect(() => {
    dispatch(fetchOpen());
    dispatch(fetchProcessing());
  }, []);

  const getTicket = ticket => {
    setTicket(ticket);
  };

  return (
    <Container>
      <OpenContainer>
        <Open
          open={open}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          ticket={ticket}
          getTicket={getTicket}
          individual={individual}
          setIndividual={setIndividual}
        />
      </OpenContainer>

      <ProcessDiv>
        <ProcessTitle width={"266px"}>RESPONDIENDO AHORA!</ProcessTitle>

        {processing.map(ticket => (
          <ProcessTicket key={ticket.id}>
            <Processing
              ticket={ticket}
              getTicket={getTicket}
              setIndividual={setIndividual}
            />
          </ProcessTicket>
        ))}
      </ProcessDiv>
    </Container>
  );
};
