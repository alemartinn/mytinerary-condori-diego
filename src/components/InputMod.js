import React, { useRef, useState} from "react";
import '../styles/InputMod.css'

export default function InputMod(props){
    const inputRef = useRef()
    const [input, setInput] = useState()
    const fnction = () => { 
        setInput(inputRef.current.value)
    }

    return(
        <input className={props.className} id={props.id} name={props.name} type={props.type} ref={inputRef} onChange={fnction} required="" min={`${props.type == 'number' && props.min}`} max={`${props.type == 'number' && props.max}`} />
    )
}