import React from "react";
import { AnswerContainer, AnswerBody, Divider, Tags } from "./style";
import { Author, AuthorName, TicketDate, Header, Img } from "../Open/style";
 const tags = ["REACT", "NODE.JS", "JAVA", "BOOTCAMP"]
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
        There is no easy way how to start programming for beginners. If you’re
        completely new to this sort of stuff, it will be nothing like anything
        you have done previously. Stick with it though. The longer you hang in
        there, the more likely you are to have a “eureka” moment and it will all
        start making sense.
      </AnswerBody>
      <Divider></Divider>
      {tags.map((tag)=> (
        <Tags>
          {tag}
        </Tags>
      ))}
      
    </AnswerContainer>
  );
};
