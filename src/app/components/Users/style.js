import styled from "@emotion/styled";

export const MainContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "100%"
});

export const Container = styled.div({
  height: "400px",
  width: "700px"
});

export const Title = styled.h1({
  margin: "0",
  clear: "right",
  width: "100%",
  height: "30px",
  color: "#ffffff",
  opacity: "90%",
  fontFamily: "Montserrat",
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "30px",
  letterSpacing: "2px"
});

export const SearchContainer = styled.div({
  marginTop: "30px",
  marginBottom: "30px"
});

export const Rectangle = styled.div({
  display: "flex",
  backgroundColor: "#091e35",
  width: "410px",
  height: "48px",
  borderRadius: "4px",
  border: "solid 1.5px rgba(255, 255, 255, 0.7)",
  alignItems: "center",
  paddingLeft: "28px"
});

export const Search = styled.input({
  width: "260px",
  height: "20px",
  opacity: "70%",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
  fontStretch: "normal",
  letterSpacing: "0.25px",
  color: "#ffffff",
  backgroundColor: "#091e35",
  border: "hidden",
  outlineColor: "transparent",
  outlineStyle: "none",
  padding: 0,
  textAlign: "left"
});
