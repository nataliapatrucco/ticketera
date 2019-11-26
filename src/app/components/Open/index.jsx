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
  ShareButton,
  TicketFooter,
  PartipantsImg
} from "./style";

export default function index({
  name,
  img,
  lastname,
  participants,
  updatedAt,
  Title,
  Content
}) {
  return (
    <Ticket>
      <Header>
        <Img src="/images/perfil.jpeg" alt="foto usuario"></Img>
        <Author>
          <AuthorName>Natalia Patrucco</AuthorName>
          <TicketDate>18 de Noviembre a las 10:34am</TicketDate>
        </Author>
        <Icon className="fas fa-hashtag">1</Icon>
      </Header>
      <Body>
        <TicketTitle>
          <strong>Como resolver error 3434231212</strong>
        </TicketTitle>
        <TicketContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, placeat.
          Sunt fugit ipsa dignissimos? Reiciendis, inventore quas eveniet
          numquam corrupti cumque enim quibusdam ut facilis eaque impedit est
          sint quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquid obcaecati corrupti laudantium, quisquam ea quam error ab
          facere impedit ex quia, non nobis placeat at. Laudantium dolores
          sapiente exercitationem cum!
        </TicketContent>
        <br />
        <TicketButton>Seguir leyendo</TicketButton>
      </Body>
      <TicketFooter>
        <AddButton>Sumarme</AddButton>
        <ShareButton>Compartir</ShareButton>
        <PartipantsImg
          src={participants}
          alt="fotos participantes"
        ></PartipantsImg>
      </TicketFooter>
    </Ticket>
  );
}
