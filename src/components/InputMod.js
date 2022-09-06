import React, {forwardRef} from "react";

const InputMod = forwardRef((props, ref) => {
        
    return(
        /*<input 
        className={props.clase} 
        name={props.name} 
        type={props.type} 
        required 
        ref={ref}
        min={`${props.type === 'number' && props.min}`} 
        max={`${props.type === 'number' && props.max}`} 
        />*/
        <input {...props} ref={ref}/>
    )
});
export default InputMod