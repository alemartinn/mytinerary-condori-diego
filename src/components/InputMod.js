import React from "react";

const InputMod = React.forwardRef((props, ref) => {
        
    return(
        <input {...props} ref={ref}/>
    )
});
export default InputMod