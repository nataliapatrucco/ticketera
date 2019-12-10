import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotificationModal from "../../components/Notifications/index";
import {
  FancyDiv,
  Rectangle,
  NavbarContainer,
  Search,
  ProfileImg,
  NotificationBell,
  SearchIcon,
  UserName
} from "./style";
import { fetchSearchedTickets } from "../../redux/actions/search";
import { logOutUser } from "../../redux/actions/user";
// import { Notification } from "../../components/Notifications/style";

export const Navbar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [notification, setNotification] = useState(false);

  const user = useSelector(state => state.user.user);
  //   const profilePic = useSelector(state => state.user // SRC DE ProfilePic

  const handleChange = event => {
    setInput(event.target.value);
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
        <NotificationBell
          onClick={() =>
            notification ? setNotification(false) : setNotification(true)
          }
          src="/images/notificationbell.png"
        />
        <ProfileImg src="/images/devman.jpg" />
        <UserName>{user.name}</UserName>
        <button onClick={() => dispatch(logOutUser())}>Log Out</button>
      </FancyDiv>
      {notification ? <NotificationModal /> : null}
    </NavbarContainer>
  );
};
