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
  // let favicon = document.querySelector("link[rel*='icon']").href
  // const [icon, setIcon] = useState(favicon);
 

  return (
    <>
      {!notifications.length ? (
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
      ) : ( 
         <ModalContainer>
            <TriangleContainer>
              <Triangle></Triangle>
            </TriangleContainer>
              {notifications.map(notification => (
            <NotificationContainer>
              <AvatarContainer src="images/github.png"></AvatarContainer>
                <Link to={`/${notification.slug}`}>
                  <Notification> {notification.message}</Notification>
                </Link>
            </NotificationContainer>
              ))}
          </ModalContainer>
          )}
    </>
  );
}
