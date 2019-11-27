import styled from "@emotion/styled";
import { relative } from "path";


export const SessionContainer= styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center"

})

export const SessionText = styled.p({
  fontFamily:"Monserrat",
  opacity: "0.9",
  fontFamily: "Montserrat",
  fontSize: "12px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.33",
  letterSpacing: "0.4px",
  marginRight: "10px"
},
props=>({
  color:props.color
})
)


export const ButtonS = styled.button({
  width: "350px",
  height: "36px",
  borderRadius: "4px",
  backgroundColor: "#ff062e",
  border: "none",
  color: "white",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: "500",
  fontStretch: "normal",
  fontStyle: "medium",
  lineHeight: "normal",
  letterSpacing: "0.75px",
  textAlign: "center",
  marginTop:"20px"
});

export const Input = styled.input({
  width: "350px",
  height: "56px",
  borderRadius: "4px",
  border: "solid 1.5px #8c939f",
  marginBottom: "10px",
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
