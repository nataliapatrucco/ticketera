import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOpen, fetchProcessing } from "../../redux/actions/tickets";
import Open from "./partials";
import Processing from "../../components/Processing";
import {
  Container,
  Title,
  OpenDiv,
  ProcessTitle,
  OpenSection,
  ProcessTicket,
  QuestionSection,
  ProcessDiv
} from "./style";

export default () => {
  const dispatch = useDispatch();
  const open = useSelector(state => state.tickets.open);
  const processing = useSelector(state => state.tickets.processing);
  const [ticket, setTicket] = useState({});
  const [individual, setIndividual] = useState(false);

  useEffect(() => {
    dispatch(fetchOpen());
    dispatch(fetchProcessing());
  }, []);

  const getTicket = ticket => {
    setTicket(ticket);
  };

  return (
    <Container>
      <Open
        open={open}
        ticket={ticket}
        getTicket={getTicket}
        individual={individual}
        setIndividual={setIndividual}
      />

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
