import React from "react";
import {
  Contenedor,
  TicketContainer,
  Assistant,
  Alumn,
  Fotito,
  Ticket,
  Ubicacion,
  UbicacionIcon,
  UbicacionContainer,
  AssistantContainer,
  AlumnContainer,
  Continue
} from "./style";
import { Link, useLocation } from "react-router-dom";

export default function ProcessingComponent({ ticket }) {
  const url = useLocation();
  return (
    <>
      {!url.pathname.includes(ticket.slug) ? (
        <Link to={`/${ticket.slug}`}>
          <Contenedor>
            <AssistantContainer>
              <Fotito
                size="24px"
                src={ticket.comment.replier.img}
                margin="0 12px 0 0 "
              ></Fotito>
              <Assistant>
                {`${ticket.comment.replier.name} ${ticket.comment.replier.lastname}`}
              </Assistant>
            </AssistantContainer>
            <UbicacionContainer>
              <UbicacionIcon src="/images/icon-maps.svg"></UbicacionIcon>
              <Ubicacion> {ticket.location} </Ubicacion>
            </UbicacionContainer>
            <TicketContainer>
              <AlumnContainer>
                <Fotito
                  src="/images/alumno.jpeg"
                  size="18px"
                  margin="0 8px 0 0 "
                ></Fotito>
                <Alumn>{ticket.author.name}</Alumn>
              </AlumnContainer>
              <Ticket>
                <strong>{ticket.title}</strong>
              </Ticket>
              <Continue>Seguir leyendo</Continue>
            </TicketContainer>
          </Contenedor>
        </Link>
      ) : (
        <Contenedor>
          <AssistantContainer>
            <Fotito
              size="24px"
              src="/images/alumno.jpeg"
              margin="0 12px 0 0 "
            ></Fotito>
            <Assistant>
              {`${ticket.comment.replier.name} ${ticket.comment.replier.lastname}`}
            </Assistant>
          </AssistantContainer>
          <UbicacionContainer>
            <UbicacionIcon src="/images/icon-maps.svg"></UbicacionIcon>
            <Ubicacion> {ticket.location} </Ubicacion>
          </UbicacionContainer>
          <TicketContainer>
            <AlumnContainer>
              <Fotito
                src="/images/alumno.jpeg"
                size="18px"
                margin="0 8px 0 0 "
              ></Fotito>
              <Alumn>{ticket.author.name}</Alumn>
            </AlumnContainer>
            <Ticket>
              <strong>{ticket.title}</strong>
            </Ticket>
            <Continue>Seguir leyendo</Continue>
          </TicketContainer>
        </Contenedor>
      )}
    </>
  );
}
