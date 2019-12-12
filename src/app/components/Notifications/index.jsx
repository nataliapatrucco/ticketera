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

export default ({ notifications }) => {
  return (
    <>
      {!notifications.length ? (
        <ModalContainer>
          <TriangleContainer>
            <Triangle></Triangle>
          </TriangleContainer>
          <NotificationContainer>
            <AvatarContainer src="images/github.png"></AvatarContainer>
            <Notification>No tenes notificaciones en este momento</Notification>
          </NotificationContainer>
        </ModalContainer>
      ) : (
        <ModalContainer>
          <TriangleContainer>
            <Triangle></Triangle>
          </TriangleContainer>
          <NotificationContainer>
            <AvatarContainer src="images/github.png"></AvatarContainer>
            {notifications.map(notification => (
              <Link to={`/${notification.slug}`}>
                <Notification key={notification.id}>
                  {notification.message}
                </Notification>
              </Link>
            ))}
          </NotificationContainer>
        </ModalContainer>
      )}
    </>
  );
};
