import React from "react";
import {
  Container,
  Header,
  P5,
  TitleContainer,
  Title,
  Icon,
  Section,
  IconContainer,
} from "./style";

import { Link } from "react-router-dom";

export default props => {
  return (
    <Container>
      <Header>
        {/* <LogoContainer> */}
          <P5 src="/images/plataforma.png" />
        {/* </LogoContainer> */}
      </Header>
      {/* <br />
      <br /> */}

    {/* <Section>   */}
        <Link style={{ textDecoration: "none" }} to="/home">
          <TitleContainer>
            <IconContainer>
              <Icon src="/images/salpicadero.png" />
            </IconContainer>
            <Title>DASHBOARD</Title>
          </TitleContainer>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/userTickets">
          <TitleContainer>
            <IconContainer>
              <Icon src="/images/pregunta.png" />
            </IconContainer>
              <Title>MIS PREGUNTAS</Title>
          </TitleContainer>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/devpedia" >
          <TitleContainer>
            <IconContainer>
              <Icon src="/images/codificacion.png" />
            </IconContainer>
            <Title>DEVPEDIA</Title>
          </TitleContainer>
        </Link>
      {/* </Section> */}
    </Container>
  );
};
