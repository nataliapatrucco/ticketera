import React from "react";
import { logOutUser } from "../../redux/actions/user";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Body, Triangle, Settings, LogOut } from "./style";

export const UserModal = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    console.log(history)

  return (
    <>
      <Triangle />
      <Body>
        <Settings>AJUSTES</Settings>
        <LogOut
          onClick={() =>
            dispatch(logOutUser()).then(() => history.push("/"))
          }
        >
          LOGOUT
        </LogOut>
      </Body>
    </>
  );
};
