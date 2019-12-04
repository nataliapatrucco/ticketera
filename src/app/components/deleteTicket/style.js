import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  borderRadius: "4px"
});

export const Modal = styled.div({
  backgroundColor: "#fff",
  maxWidth: 500,
  minHeight: 300,
  margin: "0 auto",
  padding: 30,
  wordWrap: "break-word",
  borderRadius: "4px"
});

export const Text = styled.button({
  color: "white",
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
  fontFamily: "Montserrat",
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
  outline: "none",
  justifyContent: "center",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: "500",
  fontStretch: "normal",
  fontStyle: "normal"
});

export const CancelButton = styled.button({
  display: "flex",
  width: "121px",
  height: "36px",
  marginTop: "30px",
  marginLeft: "10px",
  borderRadius: "4px",
  color: "#62d0ff",
  backgroundColor: "#2e4054",
  border: "solid 1px rgba(255, 255, 255, 0.12)",
  lineHeight: "16px",
  letterSpacing: "1.25px",
  letterSpacing: "1.25px",
  outline: "none",
  justifyContent: "center",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: "500",
  fontStretch: "normal",
  fontStyle: "normal"
});
