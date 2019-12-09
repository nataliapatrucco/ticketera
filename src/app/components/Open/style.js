// import styled from "@emotion/styled";

// export const Ticket = styled.div(
//   {
//     borderRadius: "4px",
//     display: "flex",
//     flexDirection: "column",
//     border: "solid 1px #2a3d51",
//     backgroundColor: "#192e44",
//     fontFamily: "Monstserrat",
//     width: "710px",
//     marginTop: "10px",
//     padding: "16px"
//   },
//   ({ isHighlighted }) => ({
//     borderColor: isHighlighted ? "#62d0ff" : "#2a3d51"
//   })
// );

// export const Container = styled.div({
//   float: "right"
// });

// export const Header = styled.div({
//   display: "flex",
//   flexDirection: "row",
//   marginBottom: "5px ",
//   padding: "0"
// });

// export const Img = styled.img({
//   alignItems: "center",
//   width: "40px",
//   height: "40px",
//   borderRadius: "50px",
//   flexBasis: "5%",
//   margin: "0 10px 10px 0"
// });

// export const Author = styled.section({
//   flexDirection: "column",
//   color: "#8c939f",
//   flexBasis: "90%",
//   marginLeft: "10px"
// });

// export const AuthorName = styled.div({
//   fontSize: "14px",
//   color: "#FfFfFf",
//   opacity: "90%",
//   marginTop: "5px",
//   marginBottom: "3px",
//   fontFamily: "Montserrat",
//   fontWeight: "600",
//   lineHeight: "24px",
//   letterSpacing: "0.1px"
// });

// export const TicketDate = styled.p(
//   {
//     color: "#FfFfFf",
//     opacity: "70%",
//     marginTop: "5px",
//     marginBottom: "5px",
//     fontSize: "12px",
//     fontFamily: "Montserrat",
//     fontWeight: "400",
//     lineHeight: "16px",
//     letterSpacing: "0.4px"
//   },
//   props => ({ color: props.color })
// );

// export const Icon = styled.h3({
//   flexBasis: "5%",
//   color: "#ffffff",
//   opacity: "70%",
//   paddingLeft: "8px",
//   paddingRight: "10px",
//   paddingTop: "5px",
//   height: "30px",
//   width: "fit-content",
//   borderRadius: "6px",
//   border: "solid 1px rgba(255, 255, 255, 0.7)",
//   marginTop: "5px",
//   marginBottom: "5px",
//   fontFamily: "Montserrat",
//   fontWeight: "600",
//   fontSize: "14px",
//   letterSpacing: "0.75px"
// });

// export const Body = styled.section({
//   flexDirection: "column",
//   margin: "5px 0 5px 0"
// });
// export const TicketTitle = styled.header({
//   flex: "auto",
//   marginLeft: "15px",
//   marginBottom: "5px",
//   fontSize: "20px",
//   color: "rgba(255, 255, 255, 0.87)",
//   fontFamily: "Montserrat",
//   fontWeight: "bold",
//   lineHeight: "28px",
//   letterSpacing: "0.25px"
// });

// export const TicketContent = styled.p({
//   flex: "auto",
//   marginLeft: "15px",
//   marginRight: "15px",
//   marginTop: "5px",
//   color: "#ffffff",
//   opacity: "90%",
//   fontSize: "14px",
//   fontFamily: "Montserrat",
//   fontWeight: "600",
//   lineHeight: "20px",
//   letterSpacing: "0.25px",
//   overflowWrap: "break-word"
// });

// export const TicketLink = styled.p({
//   borderRadius: "10px",
//   border: "solid 0px rgba(0,0,0,0)",
//   backgroundColor: "rgba(0,0,0,0)",
//   textDecoration: "none",
//   textDecorationLine: "none",
//   color: "#ffffff",
//   opacity: "70%",
//   margin: "15px",
//   fontFamily: "Montserrat",
//   fontWeight: "400",
//   fontSize: "14px",
//   lineHeight: "20px",
//   letterSpacing: "0.25px"
// });

// export const Line = styled.hr({
//   marginLeft: "25px",
//   marginRight: "25px",
//   border: "solid 0.5px #ffffff",
//   opacity: "30%",
//   borderRadius: "5px"
// });

// export const TicketFooter = styled.section({
//   //  height: "51px",
//   padding: "12px 0 2px 0",
//   // marginTop: "10px",
//   float: "left",
//   display: "inline-block"
// });

// export const AddIcon = styled.img({
//   height: "20px",
//   width: "20px",
//   weigth: "25.5px",
//   color: "red",
//   opacity: "60%",
//   // marginBottom: "2px",
//   marginTop: "5px",
//   marginRight: "5px",
//   ":hover": {
//     color: "red"
//   }
// });

// export const AddButton = styled.div({
//   display: "inline-block",
//   // border: "solid 1px rgba(0,0,0,0)",
//   backgroundColor: "rgba(0,0,0,0)",
//   color: "#ffffff",
//   opacity: "60%",
//   fontFamily: "Montserrat",
//   fontWeight: "600",
//   fontSize: "14px",
//   lineHeight: "16px",
//   letterSpacing: "1.25px",
//   ":hover": {
//     color: `${props => props.color}`
//   }
//   // marginRight: "60px"
// });

// // export const RemoveButton = styled.div({
// //   display: "inline-block",
// //   // border: "solid 1px rgba(0,0,0,0)",
// //   backgroundColor: "rgba(0,0,0,0)",
// //   color: "#ffffff",
// //   fontFamily: "Montserrat",
// //   fontWeight: "600",
// //   fontSize: "14px",
// //   lineHeight: "16px",
// //   letterSpacing: "1.25px"
// //   // marginRight: "60px"
// // });

// export const ShareButton = styled.div({
//   // border: "solid 1px rgba(0,0,0,0)",
//   backgroundColor: "rgba(0,0,0,0)",
//   opacity: "60%",
//   fontFamily: "Montserrat",
//   fontWeight: "600",
//   fontSize: "14px",
//   lineHeight: "16px",
//   letterSpacing: "1.25px",
//   display: "inline-block",
//   marginLeft: "37px",
//   ":hover": {
//     color: `${props => props.color}`
//   }
// });

// export const Texto = styled.div`
//   display: inline-block;
//   position: relative;
//   bottom: 5px;
//   color: #ffffff;
//   opacity: 60%;
//   &:hover {
//     color: ${props => props.color};
//   }
// `;

// export const ParticipantsImgContainer = styled.div({
//   width: "112px",
//   display: "inline-block",
//   // marginLeft: "36.6%",
//   float: "right"
// });

// export const PartipantsImg = styled.img({
//   alignItems: "center",
//   width: "24px",
//   height: "24px",
//   borderRadius: "50px",
//   marginRight: "8px",
//   float: "right"
// });

// //MODAL

// export const Modal = styled.div({
//   backgroundColor: "#fff",
//   borderRadius: 5,
//   maxWidth: 500,
//   minHeight: 300,
//   margin: "0 auto",
//   padding: 30,
//   wordWrap: "break-word"
// });

// export const ButtonDelete = styled.div({
//   display: "inline-block",
//   cursor: "pointer",
//   color: "rgba(255, 255, 255, 0.6)",
//   ":hover": {
//     color: "#cf6679",
//     img: {
//       content: "url(/images/delete-hover.svg)"
//     }
//   }
// });

// export const ButtonParticipants = styled.div({
//   display: "inline-block",
//   cursor: "pointer",
//   color: "#62d0ff"
// });

// export const ButtonAddParticipants = styled.div({
//   display: "inline-block",
//   cursor: "pointer",
//   color: "rgba(255, 255, 255, 0.6)",
//   ":hover": {
//     color: "#62d0ff",
//     img: {
//       content: "url(/images/add-hover.svg)"
//     }
//   }
// });
// export const BtnVerRespuesta = styled.button(
//   {
//     width: "162px",
//     height: "36px",
//     borderRadius: "4px",
//     backgroundColor: "#cf6679",
//     border: "none",
//     color: "black",
//     padding: "0px",
//     marginRight: "10px"
//   },
//   props => ({ backgroundColor: props.backgroundColor })
// );

// export const LabelButton = styled.label({
//   width: "133px",
//   height: "16px",
//   fontFamily: "Montserrat",
//   fontSize: "14px",
//   letterSpacing: "1.25px",
//   fontWeight: "600",
//   lineHeight: "1.14",
//   color: "#001b36"
// });

// // ADMIN

// export const ButtonAnswer = styled.div({
//   display: "flex",
//   width: "102px",
//   height: "16px",
//   marginRight: "60px",
//   justifyContent: "center",
//   cursor: "pointer",
//   color: "rgba(255, 255, 255, 0.6)",
//   ":hover": {
//     color: "#62d0ff",
//     img: {
//       content: "url(/images/answerHoverIcon.svg)"
//     }
//   },

//   fontFamily: "Montserrat",
//   fontSize: "14px",
//   fontWeight: "500",
//   fontStretch: "normal",
//   fontStyle: "normal",
//   lineHeight: "1.14",
//   letterSpacing: "1.25px"
// });

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
  margin: "5px",
  padding: "0"
});

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
    fontWeight: "400",
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
  marginRight: "6px",
  ":hover": {}
});

export const AddButton = styled.div({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  border: "solid 1px rgba(0,0,0,0)",
  backgroundColor: "rgba(0,0,0,0)",
  color: "#ffffff",
  opacity: "70%",
  fontFamily: "Montserrat",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "24px",
  letterSpacing: "0.1px",
  marginRight: "60px"
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
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "24px",
  letterSpacing: "0.1px",
  marginRight: "60px"
});

export const ShareButton = styled.p({
  border: "solid 1px rgba(0,0,0,0)",
  backgroundColor: "rgba(0,0,0,0)",
  color: "#ffffff",
  opacity: "70%",
  fontFamily: "Montserrat",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "24px",
  letterSpacing: "0.1px"
});

export const PartipantsImg = styled.img({
  alignItems: "center",
  width: "24px",
  height: "24px",
  borderRadius: "50px",
  margin: "10px"
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
  justifyContent: "center",
  cursor: "pointer",
  color: "rgba(255, 255, 255, 0.6)",
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
  color: "#62d0ff"
});

export const ButtonAddParticipants = styled.div({
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",
  color: "rgba(255, 255, 255, 0.6)",
  ":hover": {
    color: "#62d0ff",
    img: {
      content: "url(/images/add-hover.svg)"
    }
  }
});

// ADMIN

export const ButtonAnswer = styled.div({
  display: "flex",
  width: "102px",
  height: "16px",
  marginRight: "60px",
  justifyContent: "center",
  cursor: "pointer",
  color: "rgba(255, 255, 255, 0.6)",
  ":hover": {
    color: "#62d0ff",
    img: {
      content: "url(/images/answerHoverIcon.svg)"
    }
  },

  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: "500",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.14",
  letterSpacing: "1.25px"
});