import React from "react";
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
  TicketButton,
  AddButton,
  // ShareButton,
  TicketFooter,
  PartipantsImg,
  Line
} from "./style";
// 10 de noviembre 10:34am
export default function index({ ticket }) {
  console.log("soy propsssssssss", ticket);
  return (
    <Ticket>
      <Header>
        <Img src="/images/perfil.jpeg" alt="foto usuario" />
        <Author>
          <AuthorName>
            {ticket.author.name} {ticket.author.lastname}
          </AuthorName>
          <TicketDate>{ticket.updatedAt}</TicketDate>
        </Author>
        <Icon className="fas fa-hashtag"></Icon>
      </Header>
      <Body>
        <TicketTitle>
          <strong>{ticket.title} hol </strong>
        </TicketTitle>
        {ticket.content.length > 140 ? (
          <div>
            <TicketContent>{ticket.content.slice(0, 140)}...</TicketContent>
            <br />
            <TicketButton>Seguir leyendo</TicketButton>
          </div>
        ) : (
          <TicketContent> {ticket.content}</TicketContent>
        )}
      </Body>
      <Line />
      <TicketFooter>
        <AddButton>Sumarme</AddButton>
        {/* <ShareButton>Compartir</ShareButton> */}
        <PartipantsImg src="" alt="fotos participantes"></PartipantsImg>
      </TicketFooter>
    </Ticket>
  );
}
