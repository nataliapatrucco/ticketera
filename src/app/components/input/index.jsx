import React from "react";
import { Input, Label, InputContainer } from "./style";
import {ViewIcon} from "../../session/style"

export default props => {
  return (
   /*  <div style={{
      backgroundColor: 'red'
    }}> */
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
      ></Input>

       {props.placeholder === "Email" && props.errorMessage?<ViewIcon></ViewIcon>:null}
      
   
      </InputContainer>




    /* </div> */
  );
};
 {/*  pendiente agregar luego del input segun diseño */}
      {/*  <Label input={props.input}></Label> */}