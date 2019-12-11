import styled from "@emotion/styled";

export const Section = styled.section({
  marginTop: "-10px"
});

export const QuestionSection = styled.section({
  marginTop: "40px",
  marginBottom: "20px"
});

export const Title = styled.div({
  color: "#ffffff",
  width: "426px",
  opacity: "90%",
  fontFamily: "Montserrat",
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "30px",
  letterSpacing: "2px",
  marginRight: "314px",
  cursor: "pointer"
});

export const Container = styled.div({
  display: "flex",
  flexBasis: "50%",
  flexDirection: "column",
  paddingLeft: "30px"
});

export const Header = styled.div({
  display: "flex",
  justifyContent: "space-between",
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
  flexDirection: "column",
  margin: "16px 13.4px 0 16px"
});

export const Assistant = styled.div({
  fontFamily: "Montserrat",
  color: "rgba(255, 255, 255, 0.87)",
  fontWeight: "600",
  display: "flex",
  flexDirection: "row",
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
  color: "rgba(255, 255, 255, 0.87)",
  width: "214.2px",
  height: "16px",
  marginTop: "6px",
  letterSpacing: "0.4px",
  lineHeight: "1.33PX",
  fontWeight: "400"
});

export const Icon = styled.h3({
  // flexBasis: "5%",
  color: "#ffffff",
  opacity: "70%",
  paddingLeft: "8px",
  paddingRight: "10px",
  paddingTop: "5px",
  height: "30px",
  width: "fit-content",
  borderRadius: "6px",
  border: "solid 1px rgba(255, 255, 255, 0.7)",
  marginTop: "15px",
  marginRight: "15px",
  marginBottom: "5px",
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "14px",
  letterSpacing: "0.75px"
});
