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
  const processing = useSelector(state => state.tickets.processing);

  useEffect(() => {
    dispatch(fetchProcessing());
  }, []);

  return (
    <ProcessDiv>
      <ProcessTitle width={"266px"}>RESPONDIENDO AHORA!</ProcessTitle>
      {processing.length ? (
        processing.map(ticket => <Processing key={ticket.id} ticket={ticket} />)
      ) : (
        <Contenedor>
          <NoQuestion>
            <Carita src="/images/nerd-emoji.png"></Carita>
            No hay preguntas en este momento!
          </NoQuestion>
        </Contenedor>
      )}
    </ProcessDiv>
  );
};
