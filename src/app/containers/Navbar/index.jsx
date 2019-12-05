import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { search } from "../../redux/actions/search";

export const Navbar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  //   const profilePic = useSelector(state => state.user // SRC DE ProfilePic

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(search(input));
    //props.history.push("/aLaComisaria") // PARA REDIRECCIONAR
  };

  return (
    <NavbarContainer>
      <form onSubmit={handleSubmit}>
        <Rectangle>
          <SearchIcon src="/images/searchicon.png" />
          <Search
            placeholder="Buscar respuestas en la Devpedia"
            onChange={e => handleChange(e)}
          />
        </Rectangle>
      </form>
      <FancyDiv>
        <NotificationBell src="/images/notificationbell.png" />
        <ProfileImg src="/images/devman.jpg" />
        <UserName>Florencia</UserName>
      </FancyDiv>
    </NavbarContainer>
    
  );
};
