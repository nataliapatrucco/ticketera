import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  backgroundColor: "#00172e",
});

export const Header = styled.header({
  width: '53.8%',
  height: '35.8px',
  margin: '22.2px 32px 74.7px 75px'
 });


export const P5 = styled.img({
  width: "100%",
  height: '100%'
});

export const TitleContainer = styled.div({
  display: "flex"
});

export const IconContainer = styled.div({
  width: '20px',
  height: '20px',
  opacity: "90%",
  float: 'left',
  marginBottom: '37px',
  marginLeft: '77px',
  
})

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  content: url(${props => props.source});
`;

export const Title = styled.div`
  opacity: 90%;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.75px;
  color: ${props => props.active? "#62d0ff" :  "#ffffff"};
  text-decoration: none;
  margin: 1px 0 39px 10px;
`;
