import React from "react";
import { Input, Label } from "./style";

export const Input = props => {
  // const [focus, setFocus] = React.useState(false);
  // const onFocus = () => {
  //   if (focus === false) {
  //     setFocus(true);
  //   }
  // };
  return (
    <Input>
      <Label
        input={props.input}
        type={props.type}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        onClick={props.onClick}
        onFocus={props.onFocus}
        onChange={props.handleChange}
        name={props.name}
      ></Label>
    </Input>
  );
};

//   handleChange = (e) {
//     setInputs({
//         ...inputs,
//         [e.target.name]: e.target.value
//     })
//   }
