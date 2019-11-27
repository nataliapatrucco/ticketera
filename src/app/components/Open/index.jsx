import React from "react";
import moment from "moment";
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
  AddButton,
  AddIcon,
  ShareButton,
  TicketFooter,
  PartipantsImg,
  Line
} from "./style";

export default function index({ ticket }) {
  const date = moment(ticket.createdAt);
  return (
    <Ticket>
      <Header>
        <Img src="/images/perfil.jpeg" alt="foto usuario" />
        <Author>
          <AuthorName>
            {ticket.author.name} {ticket.author.lastname}
          </AuthorName>
          <TicketDate>{`${date.format("dddd")} a las ${date.format(
            "HH:mm a"
          )}`}</TicketDate>
        </Author>
        <Icon className="fas fa-hashtag"></Icon>
      </Header>
      <Body>
        <TicketTitle>
          <strong>{ticket.title}</strong>
        </TicketTitle>
        {ticket.content && ticket.content.length > 140 ? (
          <div>
            <TicketContent>{ticket.content.slice(0, 140)} ...</TicketContent>
            <Link to="/">
              <TicketLink>Seguir leyendo</TicketLink>
            </Link>
          </div>
        ) : (
          <TicketContent> {ticket.content}</TicketContent>
        )}
      </Body>
      <Line />
      <TicketFooter>
        <Buttons>
          <AddButton>
            <AddIcon src="/images/add.png" alt=""></AddIcon>
            Sumarme
          </AddButton>
          <ShareButton>Compartir</ShareButton>
        </Buttons>
        <PartipantsImg src="" alt="fotos participantes"></PartipantsImg>
      </TicketFooter>
    </Ticket>
  );
}
