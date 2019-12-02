import React from "react";
import { Input, Label, InputContainer } from "./style";
import {ViewIconErr, ViewIconPassOff} from "../../session/style"
import {ViewIconPass} from "../../session/style"


export default props => {
  return (
    <InputContainer>
      <Input
        name={props.name}
        onBlur={props.onBlur}
        onClick={props.onClick}
        onFocus={props.onFocus}
        onChange={e => props.handleChange(e)}
        placeholder={props.placeholder}
        type={props.type}
        value={props.input}
        errorMessage={props.errorMessage}
        passType={props.passType}
        togglePassword={props.togglePassword}
      ></Input>
      {props.placeholder === "Email" && props.errorMessage ? (
        <ViewIconErr></ViewIconErr>
      ) : null}
      {props.placeholder === "Contraseña" &&
      props.input.length > 0 &&
      props.passType === "password" ? (
        <ViewIconPassOff onClick={props.togglePassword}></ViewIconPassOff>
      ) : props.placeholder === "Contraseña" &&
        props.input.length > 0 &&
        props.passType === "text" ? (
        <ViewIconPass onClick={props.togglePassword}></ViewIconPass>
      ) : null}
    </InputContainer>
  );
};
 {/*  pendiente agregar label */}
      {/*  <Label input={props.input}></Label> */}