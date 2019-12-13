import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchedTickets } from "../../redux/actions/search";

import {
  Container,
  Header,
  P5,
  TitleContainer,
  Title,
  Icon,
  IconContainer
} from "./style";

export default function SidebarComponent() {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const  params  = useLocation();
  console.log(params)
  const status = user.isAdmin ? 'processing' : 'pending'
  return (
    <Container>
      <Header>
        <Link to="/">
          <P5 src="/images/logo2.png" />
        </Link>
      </Header>
      <Link style={{ textDecoration: "none" }} to="/">
        <TitleContainer>
          <IconContainer>
            <Icon src="/images/salpicadero.png" />
          </IconContainer>
          <Title>DASHBOARD</Title>
        </TitleContainer>
      </Link>
      <Link style={{ textDecoration: "none" }} to={`/userTickets/${status}`}>
        
        <TitleContainer>
          <IconContainer>
            <Icon src="/images/pregunta.png" />
          </IconContainer>
          <Title>MIS PREGUNTAS</Title>
        </TitleContainer>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/devpedia">
        <TitleContainer onClick={() => dispatch(fetchSearchedTickets())}>
          <IconContainer>
            <Icon src="/images/codificacion.png" />
          </IconContainer>
          <Title>DEVPEDIA</Title>
        </TitleContainer>
      </Link>
      {user.isAdmin ? (
        <div>
          <Link style={{ textDecoration: "none" }} to="/admin/users">
            <TitleContainer>
              <IconContainer>
                <Icon
                  src="/images/people.svg"
                  style={{ width: "150%", height: "150%" }}
                />
              </IconContainer>
              <Title>USUARIOS</Title>
            </TitleContainer>
          </Link>

          <Link style={{ textDecoration: "none" }}>
            <TitleContainer>
              <IconContainer>
                <Icon src="/images/settings.svg" />
              </IconContainer>
              <Title>CONFIGURACIÓN</Title>
            </TitleContainer>
          </Link>
        </div>
      ) : (
        ""
      )}
    </Container>
  );
}
