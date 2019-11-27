import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  background: "#00172e"
});

export const RegisterContainer = styled.div({
  display: "flex",
  flexDirection:"column",
  justifyContent: "center",
  alignItems: "center",
  width: "640px",
  height: "780px"
});

export const RegisterTitle=styled.h1({
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
})

export const ViewContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center", 
  flexDirection: "column",
  width: "800px",
  height: "780px",
  backgroundBlendMode: "multiply",
  backgroundImage: 'url("/images/view.jpg")',
  backgroundPosition:"center",
  backgroundSize:"cover"
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
