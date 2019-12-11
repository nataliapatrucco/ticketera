import styled from "@emotion/styled";

// export const Container = styled.div`
//   position: absolute;
//   left: 86.4%;
//   top: 10%;

// `

export const Triangle = styled.div`
  position: absolute;
  left: 86.4%;
  top: 10%;
  width: 0;
  background-color: #091e35;
  border-bottom: 16px solid #132d46;
  border-right: 16px solid transparent;
  border-left: 16px solid transparent;
`;

export const Body = styled.div`
  background-color: #132d46;
  position: absolute;
  left: 84.8%;
  top: 12.2%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap; 
  cursor: pointer;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff87;
  z-index: 100;
`;

export const Settings = styled.div`
  margin: 5px;
  padding-bottom: 7px;
  border-bottom: 1px solid #ffffff40;
`

export const LogOut = styled.div`
margin: 5px;
`
