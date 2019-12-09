import styled from "@emotion/styled";

export const Container = styled.div`
  background: transparent;
  z-index: 50;
  position: absolute;
  display: block;
 
`

export const ModalContainer = styled.div`
 
  background-color: #091e35;
  position: relative;
  top: 47px;
  left: 634px;
  display: inline-block;
  z-index: 100;
  height: 96px;
`

export const TriangleContainer = styled.div`
  background-color: #091e35; 
  opacity: 80%;
`;

export const Triangle = styled.div`
  margin-left: 312px;
  width: 0;
  background-color: #091e35;
  border-bottom: 16px solid #132d46;
  border-right: 16px solid transparent;
  border-left: 16px solid transparent;
  opacity: 95%;
`;

export const NotificationContainer = styled.div`
  background-color: #132d46;
  opacity: 80%;
  width: 360px;
  padding-top: 16px;
  display: inline-block; 
  
`;

export const Notification = styled.p`
  float: right;
  margin: 0;
  height: 64px;
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

`;

export const AvatarContainer = styled.img`
  width: 40px;
  height: 40px;
  color: #ffffff;
  display: inline-block;
  float: left;
  margin-left: 16px;
  margin-right: 16px;
`