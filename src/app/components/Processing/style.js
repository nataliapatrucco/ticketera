import styled from "@emotion/styled";

export const Contenedor = styled.div({
  backgroundColor: "#006088",
  display: "flex",
  height: "201px",
  flexDirection: "column",
  marginRight: "50px",
  border: "1px solid #006e9e",
  color: "white",
  borderRadius: "4px"
});

export const Fotito = styled.img`
  width: ${props => props.size};
  height: ${props => props.size};
  margin: ${props => props.margin};
  border-radius: 100%;
  float: left;
`;

export const AssistantContainer = styled.div({
  margin: "16px 13.4px 0 16px"
});

export const Assistant = styled.div({
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "1.71",
  letterSpacing: "0.1px",
  opacity: "90%",
  width: "234.px",
  height: "24px"
});

export const UbicacionContainer = styled.div({
  margin: "0 19.8px 12px 52.9px"
  // width: '224px'
});

export const UbicacionIcon = styled.img({
  opacity: "90%",
  width: "10px",
  height: "12px",
  float: "left",
  margin: "2px 4.9px 0 0"
});

export const Ubicacion = styled.div({
  fontFamily: "Montserrat",
  fontSize: "12px",
  width: "214.2px",
  height: "16px",
  margin: "0",
  letterSpacing: "0.4px",
  lineHeight: "1.33",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal"
});

export const AlumnContainer = styled.div({
  padding: "9px 21.2px 9px 8px"
});

export const Alumn = styled.div({
  width: "209.8px",
  height: "16px",
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "12px",
  opacity: "90%"
});

export const TicketContainer = styled.div({
  backgroundColor: "#006e9e",
  width: "265px",
  height: "116px",
  borderRadius: "4px",
  margin: "0 19px 17px 16px"
});

export const Ticket = styled.div({
  fontFamily: "Montserrat",
  width: "239px",
  height: "48px",
  textAlign: "left",
  fontSize: "12px",
  fontWeight: "400",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "16px",
  letterSpacing: "0.4px",
  margin: "0 18px 8px 8px",
  opacity: "90%",
  overfloWrap: "break-word",
  wordWrap: "break-word",
  hyphens: "auto",
  textAlign: "left",
  overflow: "hidden"
});

export const Continue = styled.div({
  width: "97px",
  height: "16px",
  color: "#c4e9f2",
  fontFamily: "Montserrat",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "1.33px",
  letterSpacing: "0.4px",
  margin: "0 160px 10px 8px"
});
