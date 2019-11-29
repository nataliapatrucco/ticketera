import styled from "@emotion/styled";
import { relative } from "path";

export const Label = styled.p(
  {
    width: "322.9px",
    height: "24px",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.5",
    letterSpacing: "0.15px",
    color: "#8c939f"
  },
  input => ({
    height: "16px",
    fontSize: "12px",
    lineHeight: "1.33",
    letterSpacing: "0.4px"
  })
);

export const Input = styled.input({
  width: "322px",
  height: "24px",
  borderRadius: "4px",
  border: "solid 1.5px #8c939f",
  /* marginTop: "10px", */
  paddingLeft: "16px",
  backgroundColor: "transparent",
  color: "white",
  opacity: "0.9",
  fontSize: "16px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.5",
  letterSpacing: "0.15px"

  /*  position: "relative", */
  /* left: "945px",
  top: "280px", */
  /* padding: "17px 15.1 15 12" */
});

export const InputContainer = styled.div({
  width: "350px",
  height: "56px",
  marginTop: "10px"
});
