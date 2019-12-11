import styled from "@emotion/styled";

export const ModalBackground = styled.div({
  display: "flex",
  justifyContent: "center",
  position: "fixed",
  height: "100%",
  alignItems: "flex-end",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.3)",
  padding: 50,
  //marginBottom:"100px",
  zIndex: "10"

});

export const ModalContainer = styled.div({
  display: "flex",
  //justifyContent: "center",
  flexDirection: "column",
  zIndex: "10",
  display: "flex",
  width: "710px",
  //height: "455px",
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

export const TicketTitle = styled.h3({
  display: "inline-block",
  height: "20px",
  marginTop: "32px",
  marginLeft: "32px",
  marginBottom: "5px",
  fontSize: "20px",
  color: "rgba(255, 255, 255, 0.87)",
  fontFamily: "Montserrat",
  fontWeight: "500",
  lineHeight: "1.4",
  letterSpacing: "0.25px"
});

export const TicketContent = styled.div({
  marginLeft: "32px",
  marginRight: "25px",
  height: "100px",
  marginTop: "10px",
  color: "#ffffff",
  opacity: "90%",
  fontSize: "14px",
  fontFamily: "Montserrat",
  fontWeight: "normal",
  lineHeight: "1.43",
  fontStretch: "normal",
  letterSpacing: "0.25px",
  overflowWrap: "break-word"
});

export const StatusButton = styled.button`
height: 36px;
border-radius: 4px;
border: solid 1px rgba(255, 255, 255, 0.12);
background-color: transparent;
outline: none;
font-family: Montserrat;
font-size: 14px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: 1.14;
letter-spacing: 1.25px;
color: rgba(255, 255, 255, 0.6);
:hover{
  background-color: rgba(255, 255, 255, 0.12)
}
:focus{
  color: white;
  border: solid 1px white
}
color: ${props =>
  props.primary ? 'white' : null};
`;

export const ModalInput = styled.textarea`
  display: flex;
  placeholder: ${props => props.placeholder};
  color: white;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 30px;
  letter-spacing: 0.25px;
  background-color: transparent;
  width: 630px;
  height: ${props => props.height};
  outline-color: transparent;
  border: none;
  margin-left: 10px;
  margin-right: 10px; */
 // margin: 10px;
  resize: none;
  overflow: hidden;
  outline: none;
`;

export const ButtonContainer = styled.div(
  {
    display: "flex",
    /* flexDirection: "row",
    justifyContent: "flex-end",
    alignContent:"flex-end", */
    marginBottom: "16px",
    alignItems: "flex-end",
    width: "100%",
    height: "36px",
    backgroundColor: "#2e4054",
    paddingRight: "20px"
  },
  props => ({
    justifyContent: props.justifyContent,
    marginTop: props.marginTop
  })
);




export const ModalButton = styled.button`
  cursor: pointer;
  width: 114px;
  height: 36px;
  //margin-top: 50px;
  margin: ${props => props.margin};
  margin-right: ${props => props.marginRight};
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

export const ModalInputContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 32px;
  /* display: flex; */
  width: 646px;
  height: ${props => props.height};
  border-radius: 4px;
  border: solid 1px rgba(255, 255, 255, 0.12);
  background-color: transparent;
`;
export const Line = styled.hr({
  marginLeft: "25px",
  marginRight: "25px",
  border: "solid 1px rgba(255, 255, 255, 0.12)",
  marginTop: "32px"
  //opacity: "30%",
  //borderRadius: "1px"
});

export const UploadContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "160px"
});
