import React from "react";
import { logOutUser } from "../../redux/actions/user";
import { useDispatch } from "react-redux";
import { Body, Triangle, Settings, LogOut } from "./style";

export const UserModal = () => {
  const dispatch = useDispatch();
//   const handleLogOut = () => {
//     dispatch(logOutUser()), props.history.push("/");
//   };
  return (
    <>
      <Triangle />
      <Body>
        <Settings>AJUSTES</Settings>
        <LogOut
          onClick={() =>
            dispatch(logOutUser()).then(() => props.history.push("/"))
          }
        >
          LOGOUT
        </LogOut>
      </Body>
    </>
  );
};
