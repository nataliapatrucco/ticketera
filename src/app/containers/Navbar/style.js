import styled from "@emotion/styled";

export const NavbarContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#091e35",
  paddingTop: "16px",
  paddingBottom: "15px",
  paddingLeft: "30px",
  flexDirection: "row",
  borderBottom: "solid 1.5px rgba(255, 255, 255, 0.3)"
});

export const Rectangle = styled.div({
  display: "flex",
  backgroundColor: "#091e35",
  width: "410px",
  height: "48px",
  borderRadius: "4px",
  border: "solid 1.5px rgba(255, 255, 255, 0.7)",
  alignItems: "center",
  paddingLeft: "28px"
});

export const Search = styled.input({
  width: "260px",
  height: "20px",
  opacity: "70%",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
  fontStretch: "normal",
  letterSpacing: "0.25px",
  color: "#ffffff",
  backgroundColor: "#091e35",
  border: "hidden",
  outlineColor: "transparent",
  outlineStyle: "none",
  padding: 0,
  textAlign: "left"
});

export const SearchIcon = styled.img({
  display: "flex",
  height: "17.5px",
  heigth: "17.5px",
  opacity: "70%"
});

export const FancyDiv = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center"
});

export const ProfileContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  cursor: "pointer"
});

export const ProfileImg = styled.img({
  display: "flex",
  width: "38px",
  height: "38px",
  justifyContent: "center",
  borderRadius: "50%",
  marginLeft: "10px",
  marginRight: "12px"
});

export const NotificationIcon = styled.div({
  display: "inline-block",
  position: "relative",
  bottom: "6px",
  right: "23px",
  alignContent: "center",
  borderRadius: "50%",
  width: "18px",
  height: "18px",
  marginBottom: "10px",
  backgroundColor: "#fc0f03",
  color: "#ffffff"
});

export const NotificacionDiv = styled.div({
  display: "flex",
  position: "relative",
  float: "left",
  textAlign: "center",
  top: "3px"
});

export const NotificationBell = styled.img({
  height: "37px",
  width: "37px",
  color: "#ffffff",
  border: "solid 1.5px rgba(255, 255, 255, 0.7)",
  borderRadius: "25px",
  padding: "6px",
  marginRight: "10px",
  cursor: "pointer"
});

export const UserName = styled.div({
  display: "flex",
  float: "right",
  marginRight: "10px",
  opacity: "70%",
  color: "#ffffff",
  fontFamily: "Montserrat",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0.15px",
  width: "160px",
  overflowWrap: "break-word",
  wordWrap: "break-word",
  hyphens: "auto"
});

export const ButtonLogOut = styled.img`
  height: 40px;
  width: 40px;
  color: #ffffff;
  opacity: 70%;
  object-fit: contain;
  padding: 6px;
  margin-right: 38px;
`;
