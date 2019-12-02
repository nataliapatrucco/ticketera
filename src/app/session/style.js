import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  background: "#00172e",
  /* position: 'fixed'  */
});

export const RegisterContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "640px",
  height: "780px",
  overflow: "hidden"
});

export const RegisterTitle = styled.h1({
  width: "350px",
  height: "30px",
  opacity: "0.9",
  fontFamily: "Montserrat",
  fontSize: "24px",
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.25,
  letterSpacing: "normal",
  color: "white"
});

export const ViewContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "800px",
  height: "780px",
  backgroundBlendMode: "multiply",
  backgroundImage: 'url("/images/view.jpg")',
  backgroundPosition: "center",
  backgroundSize: "cover"
});

export const ViewTitle = styled.h1({
  width: "445px",
  height: "84px",
  fontFamily: "Montserrat",
  fontSize: "34px",
  fontWeight: "500",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.24",
  letterSpacing: "0.25px",
  color: "#ffffff"
});

export const ViewText = styled.p({
  width: "445px",
  height: "140px",
  fontFamily: "Montserrat",
  fontSize: "18px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.56",
  letterSpacing: "0.5px",
  color: "#ffffff"
});

export const SessionContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginTop: "25px"
},
props => ({
  flexDirection:props.flexDirection,
  alignItems: props.alignItems,
  marginTop:props.marginTop,

}));

export const SessionText = styled.p(
  {
    opacity: "0.9",
    fontFamily: "Montserrat",
    fontSize: "12px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    letterSpacing: "0.4px",
    marginRight: "15px"
  },
  props => ({
    color: props.color,
    textDecoration:props.textDecoration,
    marginLeft:props.marginLeft,
    fontStyle:props.fontStyle,
    fontSize:props.fontSize,
    borderBottom:props.borderBottom
  })
);

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
  marginTop: "20px"
});


export const ViewLogo = styled.div({
  position:"fixed",
  top:"80px",  
  width: "230px",
  height: "50px",
  backgroundBlendMode: "multiply",
  backgroundImage: 'url("/images/logo2.png")',
  backgroundPosition: "center",
  backgroundSize: "cover",
  
});

export const ViewIconErr = styled.div({
  width: "24px",
  height: "24px",
  backgroundBlendMode: "multiply",
  backgroundImage: 'url("/images/error_24px_red.svg")',
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center",
  marginRight:"10px"
});

export const ViewIconPass= styled.div({
  width: "24px",
  height: "24px",
  backgroundBlendMode: "multiply",
  backgroundImage: 'url("/images/icon-action-visibility-24-px.png")',
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center",
  marginRight:"10px"
});


export const ViewIconPassOff= styled.div({
  width: "24px",
  height: "24px",
  backgroundBlendMode: "multiply",
  backgroundImage: 'url("/images/visibility-off-24-px.png")',
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center",
  marginRight:"10px"
});
