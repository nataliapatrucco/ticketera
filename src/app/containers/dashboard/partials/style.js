import styled from "@emotion/styled";

export const Section = styled.section({
  marginTop: "-10px"
});

export const Header = styled.div({
  display: "flex",
  width: "700px",
  backgroundColor: "#006088",
  borderRadius: "4px",
  height: "73px"
});

export const Img = styled.img`
  width: ${props => props.size};
  height: ${props => props.size};
  margin: ${props => props.margin};
  border-radius: 100%;
  float: left;
`;

export const AssistantContainer = styled.div({
  display: "flex",
  margin: "16px 13.4px 0 16px"
});

export const Assistant = styled.div({
  fontFamily: "Montserrat",
  color: "rgba(255, 255, 255, 0.87)",
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "24px",
  letterSpacing: "0.1px",
  opacity: "90%",
  width: "234.px",
  height: "24px"
});

export const UbicacionContainer = styled.div({
  margin: "0 19.8px 12px 52.9px",
  width: "224px"
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
