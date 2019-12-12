import React from "react";
import {
  Header,
  Img,
  Assistant,
  AssistantContainer,
  Ubicacion,
  UbicacionContainer,
  UbicacionIcon,
  Icon
} from "../style";

export default function ProcessingHeader({ ticket }) {
  return (
    <Header>
      <AssistantContainer>
        <Assistant>
          <Img size="40px" src={ticket.comment.replier.img} margin="0 12px 0 0 "></Img>
          {`${ticket.comment.replier.name} ${ticket.comment.replier.lastname}`}
        </Assistant>
        <UbicacionContainer>
          <UbicacionIcon src="/images/icon-maps.svg"></UbicacionIcon>
          <Ubicacion> {ticket.location} </Ubicacion>
        </UbicacionContainer>
      </AssistantContainer>
      <Icon>RESPONDIENDO AHORA</Icon>
    </Header>
  );
}
