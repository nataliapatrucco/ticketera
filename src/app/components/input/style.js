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
  width: "300px",
  height: "24px",
  paddingLeft:"16px",
  backgroundColor: "transparent",
  color: "white",
  opacity: "0.9",
  fontSize: "16px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.5",
  letterSpacing: "0.15px",
  border:"none",
  outline:"none"
});

export const InputContainer = styled.div({
  display: "flex",
  alignItems: "center",
  width: "350x",
  height: "50px",
  borderRadius: "4px",
  border: "solid 1.5px rgba(255, 255, 255, 0.7)",
  borderRadius: "4px",
  border: "solid 1.5px #8c939f",
  marginTop: "10px" 
});