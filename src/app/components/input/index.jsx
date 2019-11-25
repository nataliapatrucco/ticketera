import React from 'react'
import { Input } from './style'


export const Input = (props) => (    
    <Input 
    type={props.type} 
    placeholder={props.placeholder}  
    onChange={props.handleChange}
    name={props.name}>    
    </Input>
     
) 



