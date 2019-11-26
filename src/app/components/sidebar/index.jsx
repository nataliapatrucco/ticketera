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
        <P5 />
      </Header>
      <Section>
        <Link to="/home">
          <TitleContainer>
            <Icon />
            <Title>DASHBOARD</Title>
          </TitleContainer>
        </Link>
        <Link to="/devpedia">
          <TitleContainer>
            <Icon />

            <Title>DEVPEDIA</Title>
          </TitleContainer>
        </Link>
        <Link to="/userTickets">
          <TitleContainer>
            <Icon />
            <Title>MIS PREGUNTAS</Title>
          </TitleContainer>
        </Link>
      </Section>
    </Container>
  );
};
