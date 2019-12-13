import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  width: "700px",
  height: "80px",
  marginTop: "10px",
  borderRadius: "4px",
  border: "solid 1.5px #273e54",
  justifyContent: "space-between",
  backgroundColor: "#192e44"
});

export const Question = styled.div({
  //   cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  //   marginLeft: "10px",
  //   marginRight: "192px",
  marginTop: "30px",
  marginBottom: "26px",
  //   width: "426px",
  height: "28px",
  opacity: "90%",
  fontFamily: "Montserrat",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "1.5px",
  letterSpacing: "0.15px",
  color: "#ffffff"
});

export const Img = styled.img({
  display: "flex",
  width: "38px",
  height: "38px",
  justifyContent: "center",
  borderRadius: "50%",
  marginLeft: "10px",
  marginRight: "12px"
  //   marginTop: "20px",
  /* marginLeft: "20px",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundImage:
    "linear-gradient(to bottom, rgba(238, 238, 238, 0), rgba(0, 0, 0, 0.8) 100%)" */
});

export const UserData = styled.p({
  margin: "10px",
  color: "#ffffff"
});

export const UserAdmin = styled.div({
  display: "flex",
  flexDirection: "row",
  marginRight: "10px",
  color: "#ffffff",
  paddingTop: "20px"
});

export const Check = styled.p({
  color: "#ffffff",
  fontFamily: "Montserrat",
  fontSize: "16px",
  fontWeight: "400",
  marginTop: "10px",
  marginRight: "10px"
});

export const CheckBox = styled.div({
  marginRight: "10px",
  marginTop: "10px"
});

// export const Container = styled.div({
//   display: "flex",
//   flexDirection: "column"
// });

// export const Title = styled.th({
//   color: "#ffffff"
// });

// export const UserData = styled.td({
//   color: "#ffffff"
// });
