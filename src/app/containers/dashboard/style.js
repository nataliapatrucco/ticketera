import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  backgroundColor: "#091e35",
  paddingRight: "30px",
  height: "100%"
});

export const OpenContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "100%"
});
export const OpenDiv = styled.div({
  display: "flex",
  flexBasis: "50%",
  flexDirection: "column",
  paddingLeft: "30px"
});

export const QuestionSection = styled.section({
  marginTop: "40px",
  marginBottom: "20px"
});

export const OpenSection = styled.section({
  marginTop: "50px"
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
  marginRight: "314px"
});

export const ProcessDiv = styled.div({
  display: "flex",
  flexDirection: "column",
  marginTop: "40px",
  paddingRight: "60px",
  height: "fit-content",
  borderLeft: "solid 2px rgba(255, 255, 255, 0.3)"
});

export const ProcessTicket = styled.div({
  display: "flex",
  flexDirection: "colum",
  paddingTop: "20px",
  paddingLeft: "20px"
});

export const ProcessTitle = styled.h2({
  display: "flex",
  paddingLeft: "22px",
  color: "#62d0ff",
  opacity: "90%",
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "18px",
  lineHeight: "30px",
  letterSpacing: "2px",
  margin: "0"
});
