import React from "react";
import {
  Contenedor,
  TicketContainer,
  Assistant,
  Alumn,
  Fotito,
  AssistantContainer,
  AlumnContainer,
  Ticket,
  Ubicacion,
  UbicacionContainer,
  UbicacionIcon,
  IconContainer
} from "./style";

export default ({ ticket }) => {
  React.useEffect(() => console.log(ticket), []);
  return (
    <Contenedor>
      <AssistantContainer>
        <Fotito size="24px" src="/images/alumno.jpeg" margin="12px"></Fotito>
        <Assistant>
          {/* {`${ticket.comment.replier.name} ${ticket.comment.replier.lastname}`} */}
          Tati Vega
        </Assistant>
      </AssistantContainer>
      <UbicacionContainer>
        <IconContainer>
          <UbicacionIcon src="/images/icon-maps.svg"></UbicacionIcon>
        </IconContainer>
        <Ubicacion> en Sala 5 </Ubicacion>
      </UbicacionContainer>
      <TicketContainer>
        <AlumnContainer>
          <Fotito src="/images/alumno.jpeg" size="18px" margin="10px"></Fotito>
          <Alumn>
            {/* {ticket.author.name} */}
            Tati
          </Alumn>
        </AlumnContainer>
        <Ticket>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          suscipit porta enim sed malesuada. Aenean dapibus diam ut posuere
          viverra.
        </Ticket>
        {/*{ticket.title}*/}
      </TicketContainer>
    </Contenedor>
  );
};
