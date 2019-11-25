import styled from "@emotion/styled";

export const ViewContainer = styled.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "800px",
  height: "780px",
  backgroundBlendMode: "multiply",
  backgroundImage: url("/images/view.jpg")
});

export const ViewTitle = styled.h1({
  width: "445px",
  height: "84px",
  fontFamily: "Montserrat",
  fontSize: "34px",
  fontWeight: "500",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.24",
  letterSpacing: "0.25px",
  color: "#ffffff"
});

export const ViewText = styled.p({
  width: "350px",
  height: "140px",
  fontFamily: "Montserrat",
  fontSize: "18px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.56",
  letterSpacing: "0.5px",
  color: "#ffffff"
});
