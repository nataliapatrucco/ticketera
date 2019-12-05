import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  UserData,
  Question,
  Img,
  UserAdmin,
  Check,
  CheckBox
} from "./style";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { setUserAsAdmin, removeAdmin } from "../../redux/actions/user";

export default function ListUser({ user }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    user.isAdmin ? dispatch(removeAdmin(user)) : dispatch(setUserAsAdmin(user));
  };

  return (
    <Container>
      <Question>
        <Img src="/images/perfil.jpeg" alt="foto"></Img>
        <UserData>{user.name}</UserData>
        <UserData>{user.lastname}</UserData>
      </Question>
      <UserAdmin>
        <Check>Admin</Check>
        <CheckBox onClick={() => handleClick()}>
          {!user.isAdmin ? <MdCheckBoxOutlineBlank /> : <MdCheckBox />}
        </CheckBox>
      </UserAdmin>
    </Container>
  );
}
