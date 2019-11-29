import React, { useState } from "react";
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
  RemoveButton,
  AddIcon,
  ShareButton,
  TicketFooter,
  PartipantsImg,
  Line
} from "./style";

export default function index({
  ticket,
  handleAdd,
  user,
  index,
  getTicket,
  setIndividual,
  individual
}) {
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
        {individual ? <Icon>PENDIENTE</Icon> : <Icon>#{index}</Icon>}
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
          {/* {ticket.users.map(participant => participant.id === user.id) ? (
            <RemoveButton></RemoveButton>
          ) : (
            <AddButton onClick={() => handleAdd(ticket.id)}>
              <AddIcon src="/images/add.png" alt=""></AddIcon>
              Sumarme
            </AddButton>
          )} */}
          <AddButton>
            <AddIcon src="/images/add.png" alt=""></AddIcon>ME INTERESA
          </AddButton>
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
