import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  width: "700px",
  height: "80px",
  marginTop: "10px",
  borderRadius: "4px",
  border: "solid 1.5px #273e54",
  backgroundColor: "#192e44"
});

export const Question = styled.div({
  display: "inline-block",
  marginLeft: "10px",
  marginRight: "192px",
  marginTop: "35px",
  marginBottom: "26px",
  width: "426px",
  height: "28px",
  opacity: "90%",
  fontFamily: "Montserrat",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "1.5px",
  letterSpacing: "0.15px",
  color: "white"
});

export const Img = styled.img({
  marginTop: "20px",
  marginLeft: "20px",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundImage:
    "linear-gradient(to bottom, rgba(238, 238, 238, 0), rgba(0, 0, 0, 0.8) 100%)"
});

//modal

export const ModalContainer = styled.div({
  display: "flex",
  width: "710px",
  height: "514px",
  borderRadius: "4px",
  boxShadow:
    "0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14)",
  backgroundColor: "#2e4054"
});

export const ModalQuestion = styled.div({
  width: "338px",
  height: "16px",
  fontFamily: "Montserrat",
  fontSize: "12px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.33",
  letterSpacing: "0.4px",
  color: "white",
  marginTop: "32px",
  marginLeft: "32px"
});
