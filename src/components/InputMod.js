import React, { useRef, useState} from "react";
import '../styles/InputMod.css'

export default function InputMod(props){
    const maximum = 10 ** 8
    const inputRef = useRef()
    const [input, setInput] = useState()
    const fnction = () => { 
        setInput(inputRef.current.value)
    }

    return(
        <input className="Input-one" name={props.name} type={props.type} ref={inputRef} onChange={fnction} required min={`${props.type == 'number' && '1000'}`} max={`${props.type == 'number' && maximum}`} />
    )
}