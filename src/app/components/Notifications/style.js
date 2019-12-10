import styled from "@emotion/styled";

export const Container = styled.div`
  background: transparent;
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh; 
  display: block;
  overflow-y: hidden;
`

export const ModalContainer = styled.div`
  
  background-color: ##091e35;
  position: fixed;
  left: 64.7%;
  top: 9.1%;
  display: block;
  z-index: 100;
  height: 96px;
  overflow-y: hidden;
`

export const TriangleContainer = styled.div`
  background-color: #091e35
`;

export const Triangle = styled.div`
  margin-left: 312px;
  width: 0;
  background-color: #091e35;
  border-bottom: 16px solid #132d46;
  border-right: 16px solid transparent;
  border-left: 16px solid transparent;
`;

export const NotificationContainer = styled.div`
  background-color: #132d46;
  width: 360px;
  padding-top: 16px;
  min-height: 88px; 
  
`;

export const Notification = styled.p`
  float: right;
  margin: 0;
  height: 70px;
  width: 288px;
  padding-right: 48px;
  border-bottom: 1px solid #ffffff40;
  display: inline-block; 
  font-family: Montserrat;
  font-size: 12px;
  letter-spacing: 0.4px;
  line-height: 1.33;
  font-weight: 500;
  color: #ffffff;
  opacity: 90%;
  

`;

export const AvatarContainer = styled.img`
  width: 40px;
  height: 40px;
  color: #ffffff;
  float: left;
  margin-left: 16px;
  margin-right: 16px;
  opacity: 40%;
`