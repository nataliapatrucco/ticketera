import styled from "@emotion/styled";

export const Ticket = styled.div(
  {
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    border: "solid 1px #2a3d51",
    backgroundColor: "#192e44",
    fontFamily: "Monstserrat",
    width: "700px",
    marginTop: "10px"
  },
  ({ isHighlighted }) => ({
    borderColor: isHighlighted ? "#62d0ff" : "#2a3d51"
  })
);

export const Header = styled.div({
  display: "flex",
  flexDirection: "row",
  //margin: "5px",
  padding: "0",
}, props => ({ backgroundColor: props.backgroundColor }) );

export const Img = styled.img({
  alignItems: "center",
  width: "40px",
  height: "40px",
  borderRadius: "50px",
  flexBasis: "5%",
  margin: "10px"
});

export const Author = styled.section({
  flexDirection: "column",
  color: "#8c939f",
  flexBasis: "90%",
  marginLeft: "10px"
});

export const AuthorName = styled.h4({
  fontSize: "14px",
  color: "#FfFfFf",
  opacity: "90%",
  marginTop: "5px",
  marginBottom: "3px",
  fontFamily: "Montserrat",
  fontWeight: "500",
  lineHeight: "24px",
  letterSpacing: "0.1px"
});

export const TicketDate = styled.p(
  {
    color: "#FfFfFf",
    opacity: "70%",
    marginTop: "5px",
    marginBottom: "5px",
    fontSize: "12px",
    fontFamily: "Montserrat",
    fontWeight: "500",
    lineHeight: "16px",
    letterSpacing: "0.4px"
  },
  props => ({ color: props.color })
);

export const Icon = styled.h3({
  flexBasis: "5%",
  color: "#ffffff",
  opacity: "70%",
  paddingLeft: "8px",
  paddingRight: "10px",
  paddingTop: "5px",
  height: "30px",
  width: "fit-content",
  borderRadius: "6px",
  border: "solid 1px rgba(255, 255, 255, 0.7)",
  marginTop: "5px",
  marginRight: "10px",
  marginBottom: "5px",
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "14px",
  letterSpacing: "0.75px"
});

export const Body = styled.section({
  flexDirection: "column",
  margin: "5px"
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

export const TicketLink = styled.p({
  borderRadius: "10px",
  border: "solid 0px rgba(0,0,0,0)",
  backgroundColor: "rgba(0,0,0,0)",
  textDecoration: "none",
  textDecorationLine: "none",
  color: "#ffffff",
  opacity: "70%",
  margin: "15px",
  fontFamily: "Montserrat",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0.25px"
});

export const Line = styled.hr({
  all: "unset",
  width: "95.5%",
  border: "solid 0.5px #ffffff40",
  margin: "0 auto"
  // borderRadius: "5px"
});

export const TicketFooter = styled.section({
  display: "flex",
  flexFlow: "row",
  justifyContent: "space-between",
  paddingLeft: "9px",
  paddingRight: "20px",
  margin: "4px 2px",
  alignContent: "flex-end"
});

export const AddIcon = styled.img({
  height: "20px",
  color: "rgba(255,255,255)",
  opacity: "90%",
  position: "relative",
  top: "1px",
  marginRight: "6px",
  ":hover": {}
});

export const ShareIcon = styled.img`
  position: relative;
  top: 3px;
  color: rgba(255, 255, 255);
  opacity: 70%;
  margin-right: 6px;
`;

export const AnswerIcon = styled.img`
color: rgba(255,255,255),
opacity: 70%;
margin-right: 8px;
width: 20px;
height: 20px;
position: relative;
top: 3px;
`;

export const AddButton = styled.div({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  border: "solid 1px rgba(0,0,0,0)",
  backgroundColor: "rgba(0,0,0,0)",
  color: "#ffffff",
  // opacity: "80%",
  fontFamily: "Montserrat",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "24px",
  letterSpacing: "1.25px",
  marginRight: "16px"
});

export const RemoveButton = styled.p({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  border: "solid 1px rgba(0,0,0,0)",
  backgroundColor: "rgba(0,0,0,0)",
  color: "#ffffff",
  opacity: "70%",
  fontFamily: "Montserrat",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "24px",
  letterSpacing: "1.25px",
  marginRight: "60px"
});

export const ShareButton = styled.div({
  // border: "solid 1px rgba(0,0,0,0)",
  backgroundColor: "rgba(0,0,0,0)",
  color: "rgba(255,255,255)",
  opacity: "80%",
  fontFamily: "Montserrat",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "24px",
  letterSpacing: "1.25px"
});

export const PartipantsImg = styled.div({
  display: "inline-block",
  backgroundColor: "#b8b9ba",
  opacity: "90%",
  textAlign: "center",
  width: "24px",
  height: "24px",
  borderRadius: "50px",
  margin: "10px"
});

export const EmptyParticipant = styled.div({
  display: "inline-block",
  width: "24px",
  height: "24px",
  borderRadius: "50px",
  margin: "10px"
});

export const ParticipantIcon = styled.p({
  display: "inline-block",
  marginTop: "4px",
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "12px",
  letterSpacing: "0.4px",
  lineHeight: "16px",
  textAlign: "center",
  color: "#001b36"
});

//MODAL

export const Modal = styled.div({
  backgroundColor: "#fff",
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: "0 auto",
  padding: 30,
  wordWrap: "break-word"
});

export const ButtonDelete = styled.div({
  display: "flex",
  marginRight: "16px",
  justifyContent: "center",
  cursor: "pointer",
  color: "rgba(255, 255, 255, 0.8)",
  ":hover": {
    color: "#cf6679",
    img: {
      content: "url(/images/delete-hover.svg)"
    }
  }
});

export const ButtonParticipants = styled.div({
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",
  color: "#62d0ff",
  marginRight: "16px"
});

export const ButtonAddParticipants = styled.div({
  display: "flex",
  marginRight: "16px",
  justifyContent: "center",
  cursor: "pointer",
  opacity: "80%",
  color: "rgba(255, 255, 255)",
  ":hover": {
    color: "#62d0ff",
    img: {
      content: "url(/images/add-hover.svg)"
    }
  }
});

export const LabelButton = styled.label({
  width: "133px",
  height: "16px",
  fontFamily: "Montserrat",
  fontSize: "14px",
  letterSpacing: "1.25px",
  fontWeight: "600",
  lineHeight: "1.14",
  color: "#001b36"
});

export const BtnVerRespuesta = styled.button(
  {
    width: "162px",
    height: "36px",
    borderRadius: "4px",
    backgroundColor: "#cf6679",
    border: "none",
    color: "black",
    marginRight: "10px",
    marginTop: "9px"
  },
  props => ({ backgroundColor: props.backgroundColor })
);

// ADMIN

export const ButtonAnswer = styled.div({
  display: "flex",
  marginRight: "16px",
  justifyContent: "center",
  cursor: "pointer",
  color: "rgba(255, 255, 255, 0.8)",
  ":hover": {
    color: "#62d0ff",
    img: {
      content: "url(/images/answerHoverIcon.svg)"
    }
  }
});
