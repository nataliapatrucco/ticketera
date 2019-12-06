import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Container,
  Header,
  P5,
  TitleContainer,
  Title,
  Icon,
  Section,
  IconContainer
} from "./style";

export default () => {
  const user = useSelector(state => state.user.user);
  return (
    <Container>
      <Header>
        <Link to="/">
          <P5 src="/images/logo2.png" />
        </Link>
        {/* </LogoContainer> */}
      </Header>
      {/* <br />
      <br /> */}

      {/* <Section>   */}
      <Link style={{ textDecoration: "none" }} to="/">
        <TitleContainer>
          <IconContainer>
            <Icon src="/images/salpicadero.png" />
          </IconContainer>
          <Title>DASHBOARD</Title>
        </TitleContainer>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/userTickets/pending">
        <TitleContainer>
          <IconContainer>
            <Icon src="/images/pregunta.png" />
          </IconContainer>
          <Title>MIS PREGUNTAS</Title>
        </TitleContainer>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/devpedia">
        <TitleContainer>
          <IconContainer>
            <Icon src="/images/codificacion.png" />
          </IconContainer>
          <Title>DEVPEDIA</Title>
        </TitleContainer>
      </Link>
      {user.isAdmin ? (
        <Link style={{ textDecoration: "none" }} to="/admin/users">
          <TitleContainer>
            <IconContainer>
              <Icon src="/images/codificacion.png" />
            </IconContainer>
            <Title>USUARIOS</Title>
          </TitleContainer>
        </Link>
      ) : (
        ""
      )}
      {/* </Section> */}
    </Container>
  );
};
