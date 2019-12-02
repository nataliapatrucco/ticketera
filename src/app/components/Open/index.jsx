import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import SuperButton from "./utils";
import "moment/locale/es";
moment.locale("es");
import { Link } from "react-router-dom";

import {
  Ticket,
  Header,
  Img,
  Author,
  TicketTitle,
  AuthorName,
  TicketDate,
  Icon,
  Body,
  TicketContent,
  TicketLink,
  Buttons,
  ShareButton,
  TicketFooter,
  PartipantsImg,
  Line
} from "./style";

export default function index({
  ticket,
  index,
  getTicket,
  setIndividual,
  individual
}) {
  const user = useSelector(state => state.user.user);

  const isHighlighted = ticket => {
    return (
      ticket.authorId === user.id ||
      ticket.users.some(participant => participant.id === user.id)
    );
  };

  const date = moment(ticket.createdAt).calendar();
  return (
    <Ticket isHighlighted={isHighlighted(ticket)}>
      <Header>
        <Img src="/images/perfil.jpeg" alt="foto usuario" />
        <Author>
          <AuthorName>
            {ticket.author.name} {ticket.author.lastname}
          </AuthorName>
          <TicketDate>{`Preguntó ${date}`}</TicketDate>
        </Author>

        {individual && ticket.statusId === 2 ? (
          ""
        ) : individual && ticket.statusId === 1 ? (
          <Icon>PENDIENTE</Icon>
        ) : (
          <Icon>#{index}</Icon>
        )}
      </Header>
      <Body>
        <TicketTitle
          onClick={() => {
            getTicket(ticket);
            setIndividual(true);
          }}
        >
          <strong>{ticket.title}</strong>
        </TicketTitle>
        {ticket.content && ticket.content.length > 140 ? (
          <div>
            <TicketContent> {ticket.content.slice(0, 140)} ...</TicketContent>

            <TicketLink
              onClick={() => {
                getTicket(ticket);
                setIndividual(true);
              }}
            >
              Seguir leyendo
            </TicketLink>
          </div>
        ) : (
          <TicketContent> {ticket.content}</TicketContent>
        )}
      </Body>
      <Line />
      <TicketFooter>
        <Buttons>
          <SuperButton ticket={ticket} />
          <ShareButton>COMPARTIR</ShareButton>
        </Buttons>
        <PartipantsImg
          src="/images/perfil.jpeg"
          alt="fotos participantes"
        ></PartipantsImg>
      </TicketFooter>
    </Ticket>
  );
}
