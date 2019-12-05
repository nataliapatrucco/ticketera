import React from "react";
import { AnswerContainer, AnswerBody } from "./style";
import {
  Author,
  AuthorName,
  TicketDate,
  Header,
  Img
} from "../Open/style";

export default ({ ticket }) => {
  return (
    <AnswerContainer>
      <Header>
        <Img src="/images/perfil.jpeg" alt="foto asistente" />
        <Author>
          <AuthorName>
            {ticket.author.name} {ticket.author.lastname}
          </AuthorName>
          <TicketDate>Respondió esta pregunta</TicketDate>
        </Author>
      </Header>
      <AnswerBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis
        gravida mi. Integer sit amet mollis orci. Quisque consectetur leo et
        magna lobortis, in tristique dolor mollis. Praesent dapibus maximus
        felis, eget scelerisque orci sodales eu. In ut consectetur sapien.
        Vestibulum gravida lorem quis est bibendum, vitae iaculis augue
        vehicula. Pellentesque consequat turpis ac tempus commodo. Nunc iaculis,
        leo in pulvinar sodales, lorem ex volutpat eros, eu sagittis dolor velit
        porttitor urna. Vestibulum accumsan magna ac mi vehicula euismod. Nullam
        bibendum tellus a cursus eleifend. Suspendisse mattis, quam vitae
        convallis ultrices, diam magna venenatis lorem, sed tempor libero ligula
        et libero.
      </AnswerBody>
    </AnswerContainer>
  );
};
