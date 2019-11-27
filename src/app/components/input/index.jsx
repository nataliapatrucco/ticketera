import React from "react";
import { Input, Label } from "./style";

export default props => {
  console.log("las props", props);
  // const [focus, setFocus] = React.useState(false);
  // const onFocus = () => {
  //   if (focus === false) {
  //     setFocus(true);
  //   }
  // };
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

//   handleChange = (e) {
//     setInputs({
//         ...inputs,
//         [e.target.name]: e.target.value
//     })
//   }
