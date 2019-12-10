import React, { useState } from "react";
import Socket from "../../socket";
import { useDispatch, useSelector } from "react-redux";
import NotificationModal from "../../components/Notifications/index";
import {
  FancyDiv,
  Rectangle,
  NavbarContainer,
  Search,
  NotificationIcon,
  ProfileImg,
  NotificacionDiv,
  NotificationBell,
  SearchIcon,
  UserName,
  ButtonLogOut
} from "./style";
import { fetchSearchedTickets } from "../../redux/actions/search";
import { logOutUser } from "../../redux/actions/user";
// import { Notification } from "../../components/Notifications/style";

export const Navbar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [notification, setNotification] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // Socket on ticket status update
  Socket.on("statusChanged", data => {
    setNotifications([...notifications, data]);
  });

  // Socket on Ticket Deleted
  Socket.on("deleted", message => {
    setNotifications([...notifications, message]);
  });

  const user = useSelector(state => state.user.user);
  //   const profilePic = useSelector(state => state.user // SRC DE ProfilePic

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    setNotification(false);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchSearchedTickets(input)).then(() =>
      props.history.push("/devpedia")
    );
    setInput("");
  };

  return (
    <NavbarContainer>
      <form onSubmit={handleSubmit}>
        <Rectangle>
          <SearchIcon src="/images/searchicon.png" />
          <Search
            value={input}
            placeholder="Buscar respuestas en la Devpedia"
            onChange={e => handleChange(e)}
          />
        </Rectangle>
      </form>
      <FancyDiv>
        <NotificacionDiv>
          <NotificationBell
            onClick={() => setNotification(true)}
            src="/images/notificationbell.png"
          />
          {notifications.length ? (
            <NotificationIcon> {notifications.length} </NotificationIcon>
          ) : (
            ""
          )}
        </NotificacionDiv>

        <ProfileImg src="/images/devman.jpg" />

        <UserName>{user.name}</UserName>
        <ButtonLogOut src="/images/logout.svg"  onClick={() =>
            dispatch(logOutUser()).then(() => props.history.push("/"))
          }></ButtonLogOut>
      </FancyDiv>
      {notification ? (
        <NotificationModal
          notifications={notifications}
          handleClick={handleClick}
        />
      ) : null}
    </NavbarContainer>
  );
};
