import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOpen, fetchProcessing } from "../../redux/actions/tickets";
import Open from "./partials";
import Processing from "../../components/Processing";
import {
  Container,
  OpenContainer,
  ProcessTitle,
  ProcessTicket,
  ProcessDiv
} from "./style";

import {
  NoQuestion,
  Carita,
  Contenedor
} from "../../components/Processing/style";

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
        {processing.length ? (
          processing.map(
            ticket => (
                <Processing
                key={ticket.id}
                  ticket={ticket}
                  getTicket={getTicket}
                  setIndividual={setIndividual}
                />
            )
          )
        ) : (
          <Contenedor>
            <NoQuestion>
              <Carita src="/images/nerd-emoji.png"></Carita>
              No hay preguntas en este momento!
            </NoQuestion>
          </Contenedor>
        )}
      </ProcessDiv>
    </Container>
  );
};

