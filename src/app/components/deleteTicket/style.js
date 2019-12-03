import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex"
});

export const Modal = styled.div({
  backgroundColor: "#fff",
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: "0 auto",
  padding: 30,
  wordWrap: "break-word"
});

export const Text = styled.button({
  color: "white",
  backgroundColor: "var(--primary-200-62d0ff-8)",
  fontSize: "Montserrat",
  border: "none",
  outline: "none"
});

export const ModalContainer = styled.div({
  display: "flex",
  backgroundColor: "#2e4054",
  flexDirection: "column",
  zIndex: "10",
  width: "400px",
  height: "140px",
  borderRadius: "4px",
  boxShadow:
    "0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14)",
  backgroundColor: "#2e4054"
});

export const ModalQuestion = styled.div({
  display: "flex",
  width: "336px",
  height: "57px",
  color: "rgba(255, 255, 255, 0.87)",
  backgroundColor: "#2e4054",
  paddingLeft: "32px",
  paddingRight: "36px",
  paddingTop: "32px",
  fontFamily: "Montserrat-Regular",
  fontSize: "16px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  letterSpacing: "0.15px",
  lineHeight: "24px",
  boxShadow:
    "0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14)"
});

export const ButtonContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  width: "400px",
  height: "140px",
  backgroundColor: "background-color: #2e4054",
  backgroundColor: "#2e4054",
  paddingRight: "20px"
});

export const DeleteButton = styled.button({
  display: "flex",
  width: "113px",
  height: "36px",
  marginTop: "30px",
  color: "black",
  backgroundColor: "#62d0ff",
  border: "none",
  borderRadius: "4px",
  outline: "none"
});

export const CancelButton = styled.button({
  display: "flex",
  width: "121px",
  height: "36px",
  marginTop: "30px",
  marginLeft: "10px",
  borderRadius: "4px",
  border: "solid 1px var(--outline-ffffff-12)",
  color: "#62d0ff",
  backgroundColor: "#2e4054",
  border: "solid 1px var(--outline-ffffff-12)",
  lineHeight: "16px",
  letterSpacing: "1.25px",
  outline: "none"
});
