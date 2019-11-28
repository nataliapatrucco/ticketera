import React from "react";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");
import { Link } from "react-router-dom";
import { Modal, ModalContent, Close } from "./style";

export default ({ ticket }) => {
  return (
    <Modal id="myModal">
      <ModalContent>
        <Close>&times;</Close>
        <p>{ticket.content}</p>
      </ModalContent>
    </Modal>
  );
};
