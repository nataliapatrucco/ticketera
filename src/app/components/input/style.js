import styled from "@emotion/styled";
import { jsx, css, keyframes } from '@emotion/core'
import { relative } from "path";

const fade=keyframes`
 0% {
  opacity: 0%;
}

50% {
  opacity: 50%;
}

70% {
  opacity: 70%;
}

90% {
  opacity:90%;
}
`

export const Label = styled.p(
  {
    width: "322.9px",
    height: "16px",
    fontFamily: "Montserrat",
    fontSize: "12px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.5",
    letterSpacing: "0.15px",
    color: "#8c939f",
    margin:"0px",
    paddingLeft:"16px",
    animation: `${fade} 1s ease-in-out`
   

  }
  /* input => ({
    height: "16px",
    fontSize: "12px",
    lineHeight: "1.33",
    letterSpacing: "0.4px"
  }) */
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
  outline:"none", margin:"0px"
});

/* export const InputContainer = styled.div({
  display: "flex",
  alignItems: "center",
  width: "350x",
  height: "50px",
  borderRadius: "4px",
  border: "solid 1.5px rgba(255, 255, 255, 0.7)",
  borderRadius: "4px",
  border: "solid 1.5px #8c939f",
  marginTop: "10px" 
}); */

export const InputContainer = styled.div({
  display: "flex",
  alignItems: "center",
  width: "350x",
  height: "24px",
  borderRadius: "4px",
  border: "solid 1.5px rgba(255, 255, 255, 0.7)",
  borderRadius: "4px",
  border: "none",
 
});

export const InputLabelContainer = styled.div({
  display: "flex",
  flexDirection:"column",
  justifyContent:"center",
  width: "350x",
  height: "50px",
  borderRadius: "4px",
  border: "solid 1.5px rgba(255, 255, 255, 0.7)",
  borderRadius: "4px",
  border: "solid 1.5px #8c939f",
  marginTop: "10px" 
});