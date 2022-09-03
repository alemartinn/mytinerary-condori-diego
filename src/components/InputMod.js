import React from "react";

const InputMod = React.forwardRef((props, ref) => {
        
    return(
        <input 
        className={props.clase} 
        name={props.name} 
        type={props.type} 
        required 
        ref={ref}
        min={`${props.type === 'number' && props.min}`} 
        max={`${props.type === 'number' && props.max}`} 
        />
    )
});
export default InputMod