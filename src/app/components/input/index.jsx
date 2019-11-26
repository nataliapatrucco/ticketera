import React from "react";
import { Input } from "./style";

export default props => (
  <Input
    type={props.type}
    placeholder={props.placeholder}
    onChange={props.handleChange}
    name={props.name}
  ></Input>
);
