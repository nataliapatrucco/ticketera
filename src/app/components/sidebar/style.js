import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  // alignContent: "center",
  // textAlign: "center",
  height: "100%",
  backgroundColor: "#00172e",
  marginLeft: "25%"
});

export const Header = styled.header({
  // display: "inline-block",
  height: "0.5%",
  // alignContent: "center",
  // marginLeft: "50px",
  // marginRight: "50px",
  marginTop: "30px",
  textAlign: "center"
});

export const P5 = styled.img({
  width: "150px",
  textAlign: "center"
});

export const Section = styled.section({
  display: "flex",
  textAlign: "center",
  flexDirection: "column",
  // justifyContent: "center",
  width: "100%", 
  marginTop: '66px'
});

export const TitleContainer = styled.div({
  display: "flex"
});

export const Icon = styled.img({
  // opacity: "90%",
  // border: "solid 1px #ffffff",
  // borderRadius: "30px"
});

export const Title = styled.h5({
  opacity: "90%",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: "500",
  letterSpacing: "0.75px",
  textAlign: "center",
  color: "#ffffff",
  textDecoration: "none"
});
