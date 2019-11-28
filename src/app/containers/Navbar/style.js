import styled from "@emotion/styled";

export const NavbarContainer = styled.div({
  display: "flex",
  width: "100%",
  height: "50px",
  backgroundColor: "#091e35",
  paddingTop: "20px",
  paddingBottom: "20px",
  paddingLeft: "20px",
  justifyContent: "space-between"
});

export const Rectangle = styled.div({
  display: "flex",
  backgroundColor: "#091e35",
  width: "410px",
  height: "48px",
  borderRadius: "4px",
  border: "solid 1.5px rgba(255, 255, 255, 0.7)",
  justifyContent: "flex-start",
  alignItems: "center",
  paddingLeft: "20px"
});

export const Search = styled.input({
  display: "flex",
  width: "350px",
  height: "20px",
  opacity: "0.7",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.43",
  letterSpacing: "0.25px",
  color: "var(--white)",
  backgroundColor: "#091e35",
  border: "hidden",
  color: "rgba(255, 255, 255, 0.7)",
  outlineColor: "transparent",
  outlineStyle: "none"
});

export const SearchIcon = styled.img({
  display: "flex",
  paddingRight: "8px"
});

export const FancyDiv = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center"
});

export const ProfileImg = styled.img({
  float: "right",
  display: "flex",
  width: "36px",
  height: "36px",
  justifyContent: "center",
  borderRadius: "50px",
  objectFit: "contain",
  padding: "20px"
});

export const NotificationBell = styled.img({
  display: "flex"
});

export const UserName = styled.div({
  display: "flex",
  width: "83px",
  height: "24px",
  opacity: "70%",
  color: "white"
});
