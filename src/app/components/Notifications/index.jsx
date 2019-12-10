import React, { useState } from "react";
import Socket from "../socket";

import {
  Container,
  ModalContainer,
  Triangle,
  TriangleContainer,
  NotificationContainer,
  Notification,
  AvatarContainer
} from "./style";

export default ({ ticket }) => {
  const [notifications, setNotifications] = useState([]);

  // Socket on ticket status update
  Socket.on("statusChanged", message => {
    setNotifications([...notifications, message]);
  });

  // Socket on Ticket Deleted
  Socket.on("deleted", message => {
    setNotifications([...notifications, message]);
  });

  return (
    <>
      {!notifications.length ? (
        <>
          <Container>
            <ModalContainer>
              <TriangleContainer>
                <Triangle></Triangle>
              </TriangleContainer>
              <NotificationContainer>
                <AvatarContainer src="images/github.png"></AvatarContainer>
                <Notification>
                  No tenes notificaciones en este momento
                </Notification>
              </NotificationContainer>
            </ModalContainer>
          </Container>
        </>
      ) : (
        <Container>
          <ModalContainer>
            <TriangleContainer>
              <Triangle></Triangle>
            </TriangleContainer>
            <NotificationContainer>
              <AvatarContainer src="images/github.png"></AvatarContainer>
              {notifications.map(notification => (
                <Notification> {notification}</Notification>
              ))}
            </NotificationContainer>
          </ModalContainer>
        </Container>
      )}
    </>
  );
};
