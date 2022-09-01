import React from "react";

export default function InputMod(props){
        
    return(
        <input 
        className={props.className} 
        name={props.name} 
        type={props.type} 
        required 
        ref={props.ref}
        min={`${props.type === 'number' && props.min}`} 
        max={`${props.type === 'number' && props.max}`} 
        />
    )
}
