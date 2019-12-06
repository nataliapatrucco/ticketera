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
  Line,
  BtnVerRespuesta,
  LabelButton
} from "./style";

export default function index({ ticket, index }) {
  const user = useSelector(state => state.user.user);

  const isHighlighted = ticket => {
    return (
      ticket.authorId === user.id ||
      (ticket.users &&
        ticket.users.some(participant => participant.id === user.id))
    );
  };

  const date = moment(ticket.createdAt).calendar();
  return (
    <Ticket isHighlighted={isHighlighted(ticket)}>
      {ticket.author && (
        <>
          {ticket.statusId === 4 ? (
            <Header backgroundColor={"rgba(255, 255, 255, 0.08)"}>
              <Img src="/images/devman.jpg" alt="foto usuario" />
              <Author>
                <AuthorName>{ticket.comment.replier.name}</AuthorName>
                <TicketDate color={"#cf6679"}>Rechazo esta pregunta</TicketDate>
              </Author>
              <Link to={`/${ticket.slug}`}>
                <BtnVerRespuesta>
                  <LabelButton>VER RESPUESTA</LabelButton>
                </BtnVerRespuesta>
              </Link>
            </Header>
          ) : ticket.statusId === 3 ? (
            <Header backgroundColor={"rgba(255, 255, 255, 0.08)"}>
              <Img src="/images/devman.jpg" alt="foto usuario" />
              <Author>
                <AuthorName>{ticket.comment.replier.name}</AuthorName>
                <TicketDate color={"white"}>Respondió esta pregunta</TicketDate>
              </Author>

              <Link to={`/${ticket.slug}`}>
                <BtnVerRespuesta backgroundColor={"#62d0ff"}>
                  <LabelButton>VER RESPUESTA</LabelButton>
                </BtnVerRespuesta>
              </Link>
            </Header>
          ) : null}

          <Header>
            <Img src="/images/perfil.jpeg" alt="foto usuario" />
            <Author>
              <AuthorName>
                {ticket.author.name} {ticket.author.lastname}
              </AuthorName>
              <TicketDate>{`Preguntó ${date}`}</TicketDate>
            </Author>

            {!index && ticket.statusId === 2 ? (
              ""
            ) : !index && ticket.statusId === 1 ? (
              <Icon>PENDIENTE</Icon>
            ) : (
              <Icon>#{index}</Icon>
            )}
          </Header>
          <Body>
            <Link to={`/${ticket.slug}`}>
              <TicketTitle>
                <strong>{ticket.title}</strong>
              </TicketTitle>
            </Link>
            {ticket.content && ticket.content.length > 140 ? (
              <div>
                <TicketContent>
                  {" "}
                  {ticket.content.slice(0, 140)} ...
                </TicketContent>
                <Link to={`/${ticket.slug}`}>
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
              <SuperButton ticket={ticket} />
              <ShareButton>COMPARTIR</ShareButton>
            </Buttons>
            <PartipantsImg
              src="/images/perfil.jpeg"
              alt="fotos participantes"
            ></PartipantsImg>
          </TicketFooter>
        </>
      )}
    </Ticket>
  );
}
