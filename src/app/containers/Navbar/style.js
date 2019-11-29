import styled from "@emotion/styled";


export const NavbarContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#091e35",
  paddingTop: "16px",
  paddingBottom: "15px",
  paddingLeft: "30px",
  paddingRight: "50px",
  flexDirection: "row",
  borderBottom: "solid 1.5px rgba(255, 255, 255, 0.3)",
});

export const Rectangle = styled.div({
  //position: "relative",
  //bottom: "5px",
  display: "flex",
  backgroundColor: "#091e35",
  width: "410px",
  height: "48px",
  borderRadius: "4px",
  border: "solid 1.5px rgba(255, 255, 255, 0.7)",
  //justifyContent: "flex-start",
  alignItems: "center",
  paddingLeft: "28px",
});

export const Search = styled.input({
  //display: "flex",
  width: "260px",
  height: "20px",
  opacity: "70%",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
  fontStretch: 'normal',
  letterSpacing: "0.25px",
  color: "#ffffff",
  backgroundColor: "#091e35",
  border: "hidden",
  // color: "rgba(255, 255, 255, 0.7)",
  outlineColor: "transparent",
  outlineStyle: "none",
  padding: 0,
  textAlign: 'left'
});

export const SearchIcon = styled.img({
  display: "flex",
  //marginRight: "11.5px",
  height: "17.5px",
  heigth: '17.5px',
  opacity: '70%'
});

export const FancyDiv = styled.div({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
});

export const ProfileImg = styled.img({
  // float: "right",
  display: "flex",
  width: "36px",
  height: "36px",
  justifyContent: "center",
  borderRadius: "50%",
  marginLeft: "4px",
  marginRight: "4px"
});

export const NotificationBell = styled.img({
  // display: "flex",
  height: "74%",
  width: "18%",
  color: "#ffffff",
  opacity: "70%",
  border: "solid 1px rgba(255, 255, 255, 0.7)",
  borderRadius: "20px",
  padding: "6px",
  marginRight: "5px"
});

export const UserName = styled.div({
  display: "flex",
  opacity: "70%",
  color: "#ffffff",
  fontFamily: "Montserrat",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0.15px"
});
