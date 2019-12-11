import React, { useState, useEffect } from "react";
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

export default function ListUser({ user, handleClick }) {
  return (
    <Container>
      <Question>
        <Img src="/images/perfil.jpeg" alt="foto"></Img>
        <UserData>{user.name}</UserData>
        <UserData>{user.lastname}</UserData>
      </Question>
      <UserAdmin>
        <Check>Admin</Check>
        <CheckBox onClick={() => handleClick(user)}>
          {!user.isAdmin ? <MdCheckBoxOutlineBlank /> : <MdCheckBox />}
        </CheckBox>
      </UserAdmin>
    </Container>
  );
}
