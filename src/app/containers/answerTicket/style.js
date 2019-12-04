import styled from "@emotion/styled";

export const ModalBackground = styled.div({
  display: "flex",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.3)",
  padding: 50,
  zIndex: "10"
});

export const ModalContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  zIndex: "10",
  display: "flex",
  width: "710px",
  height: "514px",
  borderRadius: "4px",
  boxShadow:
    "0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14)",
  backgroundColor: "#2e4054"
});

export const Container = styled.div({
  display: "flex",
  width: "700px",
  height: "80px",
  marginTop: "10px",
  borderRadius: "4px",
  border: "solid 1.5px #273e54",
  backgroundColor: "#192e44"
});

export const TicketTitle = styled.header({
  flex: "auto",
  marginLeft: "15px",
  marginBottom: "5px",
  fontSize: "18px",
  color: "rgba(255, 255, 255, 0.87)",
  fontFamily: "Montserrat",
  fontWeight: "600",
  lineHeight: "28px",
  letterSpacing: "0.5px"
});

export const TicketContent = styled.p({
  flex: "auto",
  marginLeft: "15px",
  marginRight: "15px",
  marginTop: "5px",
  color: "#ffffff",
  opacity: "90%",
  fontSize: "14px",
  fontFamily: "Montserrat",
  fontWeight: "400",
  lineHeight: "20px",
  letterSpacing: "0.25px",
  overflowWrap: "break-word"
});

export const ModalInput = styled.textarea`
  display: flex;
  color: white;
  font-family: Montserrat;
  font-size: ${props => props.fontSize};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 0.25px;
  background-color: transparent;
  width: 630px;
  height: ${props => props.height};
  outline-color: transparent;
  border: none;
  margin-left: 10px;
  margin-right: 10px;
  resize: none;
  overflow: hidden;
  outline: none;
`;

export const ButtonContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  width: "400px",
  height: "140px",
  backgroundColor: "#2e4054",
  paddingRight: "20px"
});

export const StatusButton = styled.button({
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

export const ModalButton = styled.button`
  cursor: pointer;
  width: 114px;
  height: 36px;
  margin-top: ${props => props.marginTop};
  margin-left: ${props => props.marginLeft};
  border-radius: 4px;
  border: ${props => props.border};
  background-color: ${props => props.color};
`;

export const ModalButtonLabel = styled.label`
  cursor: pointer;
  width: 83px;
  height: 16px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: 1.25px;
  color: ${props => props.color};
`;
