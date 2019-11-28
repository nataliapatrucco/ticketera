import React from "react";
import {
  Container,
  Header,
  P5,
  TitleContainer,
  Title,
  Icon,
  Section
} from "./style";

import { Link } from "react-router-dom";

export default props => {
  return (
    <Container>
      <Header>
        <P5 src="/images/plataforma.png" />
      </Header>
      <br />
      <br />

      <Section>
        <Link style={{ textDecoration: "none" }} to="/home">
          <TitleContainer>
            <Icon />
            <Title>DASHBOARD</Title>
          </TitleContainer>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/devpedia">
          <TitleContainer>
            <Icon />

            <Title>DEVPEDIA</Title>
          </TitleContainer>
        </Link>
        <Link style={{ textDecoration: "none" }} to="ticket/userTickets">
          <TitleContainer>
            <Icon />
            <Title>MIS PREGUNTAS</Title>
          </TitleContainer>
        </Link>
      </Section>
    </Container>
  );
};
