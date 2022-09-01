import React, { useRef, createRef} from 'react';
import axios from 'axios';
import '../styles/NewCity.css'

export default function NewCity() {

    const formOdel = [
        {name: 'city', type: 'text'},
        {name: 'country', type: 'text'},
        {name: 'photo', type: 'text'},
        {name: 'population', type: 'number', min: 1000, max:1000000000},
        {name: 'fundation', type: 'number', min: 0, max: 2022}
    ]

    let typeInputs = [];
    let allInputs = useRef([]);
    
    /* Create a ref to each input from form*/
    formOdel.forEach((element, index) => typeInputs.push(formOdel[index].name))
    allInputs.current= formOdel.map((el,index) => allInputs.current[index] = createRef());

    const handleSubmit = e => {
        e.preventDefault();
        let data = {};
        typeInputs.forEach((element, index) => {data[element] = allInputs.current[index].current.value})
        console.log(data);
        axios.post(`http://localhost:4000/cities`, data)
      .then(res => {
        // form.reset();
        console.log(res);
      })
    }

    const viewForm = (elem, index) => (

        <fieldset className='NewCity-fieldset' key={index}>
            <label htmlFor={elem.name}>{elem.name}: 
                {/* <InputMod id={input.name} ref={inputRef} type={input.type} name={input.name} min={`${input.type == 'number' && input.min}`} max={`${input.type == 'number' && input.max}`}/> */}
                <input 
                    className="Input-one" 
                    name={elem.name} 
                    type={elem.type} 
                    required 
                    ref={allInputs.current[index]}
                    min={`${elem.type === 'number' && elem.min}`} 
                    max={`${elem.type === 'number' && elem.max}`} 
                />
            </label>
        </fieldset>
    )

    return (
        <div className='Input-container'>
            <form className='NewCity-form' onSubmit={handleSubmit}>
                <h2 className='Title-form'>New City</h2>
                <div className='Inputs-form'>{formOdel.map(viewForm)}</div>
                <button className="icon-btn add-btn" type='submit'>
                    <div className="add-icon"></div>
                    <div className="btn-txt">Add City</div>
                </button>
            </form>
        </div>
    )
  }
