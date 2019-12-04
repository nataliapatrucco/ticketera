import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  width: "700px",
  height: "80px",
  marginTop: "10px",
  borderRadius: "4px",
  border: "solid 1.5px #273e54",
  backgroundColor: "#192e44"
});

export const Question = styled.div({
  cursor: "pointer",
  display: "inline-block",
  marginLeft: "10px",
  marginRight: "192px",
  marginTop: "35px",
  marginBottom: "26px",
  width: "426px",
  height: "28px",
  opacity: "90%",
  fontFamily: "Montserrat",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "1.5px",
  letterSpacing: "0.15px",
  color: "white"
});

export const Img = styled.img({
  marginTop: "20px",
  marginLeft: "20px",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundImage:
    "linear-gradient(to bottom, rgba(238, 238, 238, 0), rgba(0, 0, 0, 0.8) 100%)"
});

//modal

export const ModalContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  zIndex: "10",
  display: "flex",
  width: "710px",
  height: "514px",
  borderRadius: "4px",
  boxShadow:
    "0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14)",
  backgroundColor: "#2e4054"
});

export const ModalQuestion = styled.div`
  display: flex;
  width: 338px;
  height: 16px;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.4px;
  color: white;
  margin-top: ${props => props.marginTop};
  margin-left: 32px;
`;

export const ModalClose = styled.button({});

export const ModalInputContainer = styled.div`
  margin-top: 10px;
  margin-left: 32px;
  display: flex;
  width: 646px;
  height: ${props => props.height};
  border-radius: 4px;
  border: solid 1px rgba(255, 255, 255, 0.12);
  background-color: transparent;
`;

export const ModalInput = styled.textarea`
  display: flex;
  color: white;
  font-family: Montserrat;
  font-size: ${props => props.fontSize};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 0.25px;
  background-color: transparent;
  width: 630px;
  height: ${props => props.height};
  outline-color: transparent;
  border: none;
  margin-left: 10px;
  margin-right: 10px;
  resize: none;
`;

export const ModalButtonContainer = styled.div`
  width: 710px;
  height: 68px;
  border-radius: 4px;
`;

export const ModalButton = styled.button`
  cursor: pointer;
  width: 114px;
  height: 36px;
  margin-top: ${props => props.marginTop};
  margin-left: ${props => props.marginLeft};
  border-radius: 4px;
  border: ${props => props.border};
  background-color: ${props => props.color};
`;

export const ModalButtonLabel = styled.label`
  cursor: pointer;
  width: 83px;
  height: 16px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: 1.25px;
  color: ${props => props.color};
`;

export const ModalUploadBox = styled.div`
  margin-left: 30px;
  margin-top: 5px;
  background-color: rgba(255, 255, 255, 0.12);
  width: 80px;
  height: 80px;
  border: solid 1px rgba(255, 255, 255, 0.12);
`;

export const ModalUploadBoxPlus = styled.input`
  margin-left: 25px;
  margin-top: 10px;
  width: 18.7px;
  height: 18.7px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 20px;
`;

export const ModalCloseButton = styled.div`
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 25px;
  margin-top: 10px;
  width: 18.7px;
  height: 18.7px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 20px;
  margin-left: 680px;
`;

export const Icon = styled.img`
  display: flex;
  width: 23px;
  height: auto;
`;
