import styled from "@emotion/styled";

export const ModalContent = styled.div({
  backgroundColor: "aqua",
  width: "300px",
  padding: "10px 20px",
  margin: "20% auto",
  position: "relative"
});

export const Modal = styled.div({
  backgroundColor: "rgba(0,0,0,.8)",
  position: "fixed",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
  opacity: "0",
  pointerEvents: "none",
  transition: "all 1s"
});
