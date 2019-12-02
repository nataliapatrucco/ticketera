import React from "react";
import {
  Header,
  Img,
  Assistant,
  AssistantContainer,
  Ubicacion,
  UbicacionContainer,
  UbicacionIcon
} from "../../dashboard/partials/style";

export default function ProcessingHeader({ ticket }) {
  return (
    <Header>
      <AssistantContainer>
        <Img size="24px" src="/images/alumno.jpeg" margin="0 12px 0 0 "></Img>
        <Assistant>
          {`${ticket.comment.replier.name} ${ticket.comment.replier.lastname}`}
        </Assistant>
      </AssistantContainer>
      <UbicacionContainer>
        <UbicacionIcon src="/images/icon-maps.svg"></UbicacionIcon>
        <Ubicacion> en Sala 5 </Ubicacion>
      </UbicacionContainer>
    </Header>
  );
}
