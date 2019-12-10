import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  ModalContainer,
  Triangle,
  TriangleContainer,
  NotificationContainer,
  Notification,
  AvatarContainer
} from "./style";

export default ({ handleClick, notifications }) => {
  return (
    <>
      {!notifications.length ? (
        <>
          <Container onClick={handleClick}>
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
                <Link to={`/${notification.slug}`}>
                  <Notification> {notification.message}</Notification>
                </Link>
              ))}
            </NotificationContainer>
          </ModalContainer>
        </Container>
      )}
    </>
  );
};
