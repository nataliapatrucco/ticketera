import React from "react";
import { Input, Label } from "./style";

export default props => {
  return (
    <div>
      {/*  pendiente agregar luego del input segun diseño */}
      {/*  <Label input={props.input}></Label> */}
      <Input
        name={props.name}
        onBlur={props.onBlur}
        onClick={props.onClick}
        onFocus={props.onFocus}
        onChange={e => props.handleChange(e)}
        placeholder={props.placeholder}
        type={props.type}
        value={props.input}
      ></Input>
    </div>
  );
};
