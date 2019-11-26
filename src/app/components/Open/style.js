import styled from "@emotion/styled";

export const Ticket = styled.div({
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  border: "solid 1px",
  backgroundColor: "#00172e"
});

export const Header = styled.div({
  display: "flex",
  flexDirection: "row"
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
  marginTop: "5px",
  marginLeft: "10px"
});

export const AuthorName = styled.h4({
  fontSize: "20px",
  color: "#F5F5F5",
  marginTop: "5px",
  marginBottom: "10px"
});

export const TicketDate = styled.p({
  marginTop: "5px",
  marginBottom: "5px"
});

export const Icon = styled.i({
  flexBasis: "5%",
  color: "white"
});

export const Body = styled.section({
  flexDirection: "column",
  color: "#F5F5F5",
  margin: "10px"
});
export const TicketTitle = styled.header({
  flex: "auto",
  margin: "15px",
  fontSize: "25px",
  color: "#62d0ff"
});

export const TicketContent = styled.p({
  flex: "auto",
  margin: "15px",
  fontSize: "18px"
});

export const TicketButton = styled.button({
  borderRadius: "10px",
  border: "solid 1px rgba(0,0,0,0)",
  backgroundColor: "rgba(0,0,0,0)",
  color: "#8c939f",
  marginLeft: "15px",
  marginTop: "5px",
  fontSize: "15px"
});

export const TicketFooter = styled.section({
  flexDirection: "column",
  justifyContent: "spaceAround",
  margin: "10px"
});

export const AddButton = styled.button({
  borderRadius: "10px",
  flexBasis: "40%",
  border: "solid 1px rgba(0,0,0,0)",
  backgroundColor: "rgba(0,0,0,0)",
  color: "#8c939f",
  fontSize: "15px",
  margin: "8px"
});

export const ShareButton = styled.button({
  flexBasis: "40%",
  borderRadius: "10px",
  border: "solid 1px rgba(0,0,0,0)",
  backgroundColor: "rgba(0,0,0,0)",
  color: "#8c939f",
  fontSize: "15px",
  margin: "8px"
});

export const PartipantsImg = styled.img({
  flex: "auto",
  flexBasis: "20%"
});
