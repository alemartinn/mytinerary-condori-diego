import React, {forwardRef} from "react";

const InputMod = forwardRef((props, ref) => {
        
    return(
        <input {...props} ref={ref}/>
    )
});
export default InputMod