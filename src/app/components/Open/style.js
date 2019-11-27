import styled from "@emotion/styled";

export const Ticket = styled.div({
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  border: "solid 1px #2a3d51",
  backgroundColor: "#192e44",
  fontFamily: "Monstserrat"
});

export const Header = styled.div({
  display: "flex",
  flexDirection: "row",
  margin: "10px"
});

export const Img = styled.img({
  alignItems: "center",
  width: "5%",
  height: "5%",
  borderRadius: "50px",
  flexBasis: "5%",
  margin: "10px"
});

export const Author = styled.section({
  flexDirection: "column",
  color: "#8c939f",
  flexBasis: "90%",
  // marginTop: "5px",
  marginLeft: "10px"
});

export const AuthorName = styled.h4({
  fontSize: "14px",
  color: "#FfFfFf",
  opacity: "90%",
  marginTop: "5px",
  marginBottom: "10px",
  fontFamily: "Montserrat",
  fontWeight: "SemiBold",
  lineHeight: "24px",
  letterSpacing: "0.1px"
});

export const TicketDate = styled.p({
  color: "#FfFfFf",
  opacity: "70%",
  marginTop: "5px",
  marginBottom: "5px",
  fontSize: "12px",
  fontFamily: "Montserrat",
  fontWeight: "Regular",
  lineHeight: "16px",
  letterSpacing: "0.4px"
});

export const Icon = styled.i({
  flexBasis: "5%",
  color: "white"
});

export const Body = styled.section({
  flexDirection: "column",
  margin: "10px"
});
export const TicketTitle = styled.header({
  flex: "auto",
  margin: "15px",
  fontSize: "18px",
  color: "#62d0ff",
  fontFamily: "Montserrat",
  fontWeight: "Regular",
  lineHeight: "28px",
  letterSpacing: "0.5px"
});

export const TicketContent = styled.p({
  flex: "auto",
  margin: "15px",
  color: "#ffffff",
  opacity: "90%",
  fontSize: "14px",
  fontFamily: "Montserrat",
  fontWeight: "Regular",
  lineHeight: "20px",
  letterSpacing: "0.25px"
});

export const TicketLink = styled.p({
  borderRadius: "10px",
  border: "solid 0px rgba(0,0,0,0)",
  backgroundColor: "rgba(0,0,0,0)",
  textDecoration: "none",
  color: "#ffffff",
  opacity: "70%",
  margin: "15px",
  fontFamily: "Montserrat",
  fontWeight: "regular",
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0.25px"
});

export const Line = styled.hr({
  marginLeft: "25px",
  marginRight: "25px",
  border: "solid 0.5px #ffffff",
  opacity: "30%",
  borderRadius: "5px"
});

export const TicketFooter = styled.section({
  display: "flex",
  flexFlow: "row",
  justifyContent: "space-between",
  paddingLeft: "32px",
  paddingRight: "20px",
  margin: "10px",
  alignContent: "flex-end"
});

export const Buttons = styled.div({
  display: "flex"
  // justifyContent: "space-between"
});

export const AddIcon = styled.img({
  height: "20px",
  weigth: "25.5px",
  color: "#ffffff",
  marginBottom: "2px",
  marginRight: "6px"
});

export const AddButton = styled.p({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  border: "solid 1px rgba(0,0,0,0)",
  backgroundColor: "rgba(0,0,0,0)",
  color: "#ffffff",
  opacity: "70%",
  fontFamily: "Montserrat",
  fontWeight: "Regular",
  fontSize: "14px",
  lineHeight: "24px",
  letterSpacing: "0.1px",
  marginRight: "60px"
});

export const ShareButton = styled.p({
  // borderRadius: "10px",
  border: "solid 1px rgba(0,0,0,0)",
  backgroundColor: "rgba(0,0,0,0)",
  // margin: "8px",
  color: "#ffffff",
  opacity: "70%",
  fontFamily: "Montserrat",
  fontWeight: "Regular",
  fontSize: "14px",
  lineHeight: "24px",
  letterSpacing: "0.1px"
});

export const PartipantsImg = styled.img({
  // flex: "auto"
});
